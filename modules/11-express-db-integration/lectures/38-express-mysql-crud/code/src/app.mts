import express from "express";
import type { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import {
  initializeWorkshops, isRecord, parseGroupSize, parseMinSeats,
  parseWorkshopId, validateWorkshopInput, workshopSummary
} from "./workshop-core.mts";
import type { Workshop } from "./workshop-core.mts";
import { pool } from "./db.mts";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

type WorkShopRow = RowDataPacket & Workshop;

async function findWorkshop(id: number): Promise<Workshop | null> {
  // ? is part of prepared statement
  const [rows] = await pool.execute<WorkShopRow[]>(
    "SELECT _id, title, seats FROM workshops WHERE _id = ?", [id]
  );
  return rows[0] ?? null;
}

export function createApp(seed: Workshop[]) {
  const app = express();
  // The fixture is loaded once, and every route uses this same mutable Map.
  const workshops = initializeWorkshops(seed);
  let nextId = Math.max(0, ...workshops.keys()) + 1;

  app.use(morgan("dev"));
  app.use((_req, res, next) => {
    res.set("X-Workshop-Lab", "Express");
    next();
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get("/", (_req, res) => {
    res.type("text/plain").send("Workshop server is running");
  });
  app.get("/health", (_req, res) => {
    res.type("text/plain").send("OK");
  });

  app.get("/workshops", async (req, res) => {
    const raw = req.query.minSeats;
    const min = parseMinSeats(raw);
    if (raw !== undefined && min === null) {
      res.status(400).json({ error: "Invalid minSeats" });
      return;
    }
    const [rows] = await pool.execute<WorkShopRow[]>("SELECT _id, title, seats FROM workshops ORDER BY _id ASC");
    res.json(min === null ? rows : rows.filter(row => row.seats >= min));
  });

  app.get("/count", (_req, res) => {
    res.json({ count: workshops.size });
  });
  app.get("/summary", (_req, res) => {
    res.json(workshopSummary(workshops));
  });
  app.get("/workshops/:id", async (req, res) => {
    const id = parseWorkshopId(req.params.id);
    if (id === null) {
      res.status(400).json({ error: "Invalid workshop ID" });
      return;
    }
    const workshop = await findWorkshop(id);
    if (workshop === undefined) {
      res.status(404).json({ error: "Workshop not found" });
      return;
    }
    res.json(workshop);
  });

  // Retained from Lecture 36: does not save anything.
  app.post("/workshops/preview", async (req, res) => {
    // validate the input
    const parsed = validateWorkshopInput(req.body);
    // parsed data is NOT OK -> return 400
    if (!parsed.ok) {
      res.status(400).json({ error: "Invalid workshop", details: parsed.details });
      return;
    }
    // pool.execute(INSERT INTO...)
    const [result] = await pool.execute<ResultSetHeader>("INSERT INTO workshops (title, seats) VALUES (?, ?)", [parsed.value.title, parsed.value.seats]);
    // get the result -> return
    res.status(201).json({ _id: result.insertId, ...parsed.value });
  });

  // Retained from Lecture 36: observes the same live workshop Map.
  app.post("/workshops/:id/check-capacity", (req, res) => {
    const id = parseWorkshopId(req.params.id);
    if (id === null) {
      res.status(400).json({ error: "Invalid workshop ID" });
      return;
    }
    const workshop = workshops.get(id);
    if (workshop === undefined) {
      res.status(404).json({ error: "Workshop not found" });
      return;
    }
    const groupSize = isRecord(req.body)
      ? parseGroupSize(req.body.groupSize) : null;
    if (groupSize === null) {
      res.status(400).json({ error: "Invalid groupSize" });
      return;
    }
    res.json({ fitsGroup: groupSize <= workshop.seats, reserved: false });
  });

  app.post("/workshops", async (req, res) => {
    // validate the input
    const parsed = validateWorkshopInput(req.body);
    // parsed data is NOT OK -> return 400
    if (!parsed.ok) {
      res.status(400).json({ error: "Invalid workshop", details: parsed.details });
      return;
    }
    // pool.execute(INSERT INTO...)
    const [result] = await pool.execute<ResultSetHeader>("INSERT INTO workshops (title, seats) VALUES (?, ?)", [parsed.value.title, parsed.value.seats]);
    // get the result -> return
    res.status(201).json({ _id: result.insertId, ...parsed.value });
  });

  app.put("/workshops/:id", (req, res) => {
    const id = parseWorkshopId(req.params.id);
    if (id === null) {
      res.status(400).json({ error: "Invalid workshop ID" });
      return;
    }
    if (!workshops.has(id)) {
      res.status(404).json({ error: "Workshop not found" });
      return;
    }
    const result = validateWorkshopInput(req.body);
    if (!result.ok) {
      res.status(400).json({ error: "Invalid workshop", details: result.details });
      return;
    }
    const updated: Workshop = { _id: id, ...result.value };
    workshops.set(id, updated);
    res.status(200).json(updated);
  });

  app.delete("/workshops/:id", (req, res) => {
    const id = parseWorkshopId(req.params.id);
    if (id === null) {
      res.status(400).json({ error: "Invalid workshop ID" });
      return;
    }
    const deleted = workshops.delete(id);
    if (!deleted) {
      res.status(404).json({ error: "Workshop not found" });
      return;
    }
    res.status(204).end();
  });

  // Opt-in diagnostic route for demonstrating Express 5 async error forwarding.
  if (process.env.ENABLE_DEMO_FAILURE === "1") {
    app.get("/demo/failure", async () => {
      throw new Error("Simulated internal failure");
    });
  }

  app.use((_req, res) => {
    res.status(404).json({ error: "Route not found" });
  });

  app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) return next(err);
    if (isRecord(err) && err.type === "entity.parse.failed") {
      res.status(400).json({ error: "Malformed JSON request body" });
      return;
    }
    const status = isRecord(err)
      ? (typeof err.status === "number" ? err.status : err.statusCode)
      : undefined;
    if (typeof status === "number" && Number.isInteger(status) && status >= 400 && status < 500) {
      res.status(status).json({ error: "Invalid request" });
      return;
    }
    console.error("Unhandled request error:", err);
    res.status(500).json({ error: "Internal server error" });
  });

  return { app, workshops };
}
