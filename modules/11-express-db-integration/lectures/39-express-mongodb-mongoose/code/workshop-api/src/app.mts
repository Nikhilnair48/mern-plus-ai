import express from "express";
import type { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { isRecord, validateWorkshopInput } from "./workshop-core.mts";
import { Workshop } from "./models.mts";
import mongoose from "mongoose";

export function createApp() {
  const app = express();
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get("/", (_req, res) => res.type("text/plain").send("Workshop server is running"));
  app.get("/health", (_req, res) => res.type("text/plain").send("OK"));

  app.get("/workshops", async(req, res) => {
    const workshops = await Workshop.find();
    res.json(workshops);
  });

  app.post("/workshops", async (req, res) => {
    const parsed = validateWorkshopInput(req.body);
    if (!parsed.ok) {
      // return a 400?
    }
    const created = await Workshop.create(parsed.value);
    res.location(`workshops/${created._id}`).status(201).json(created);
  });

  app.get("/workshops/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    if (typeof id !== "string" || !mongoose.isObjectIdOrHexString(id)) {
      // return a 400
    }

    const workshop = await Workshop.findById(id);
    if (!workshop) {
      res.status(404).json({ error: "Workshop not found!" });
    }
    res.json(workshop);

  })

  app.put("/workshops/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    if (typeof id !== "string" || !mongoose.isObjectIdOrHexString(id)) {
      // return a 400
    }
    const workshop = await Workshop.findById(id);
    if (!workshop) {
      res.status(404).json({ error: "Workshop not found!" });
      return;
    }
    const parsed = validateWorkshopInput(req.body);
    if (!parsed.ok) {
      res.status(400).json({ error: "Invalid workshop", details: parsed.details });
      return;
    }
    workshop.set(parsed.value);
    await workshop.save();
    res.json(workshop);
  });

  app.delete("/workshops/:id", async (req, res) => {
    const id = req.params.id;
    if (typeof id !== "string" || !mongoose.isObjectIdOrHexString(id)) {
      // return a 400
    }

    await Workshop.findByIdAndDelete(id);
    res.status(204).json({ message: "Deletion successful!" });
  })

  app.use((_req, res) => res.status(404).json({ error: "Route not found" }));
  app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) return next(err);
    if (isRecord(err) && err.type === "entity.parse.failed") {
      res.status(400).json({ error: "Malformed JSON request body" });
      return;
    }
    console.error("Unhandled request error:", err);
    res.status(500).json({ error: "Internal server error" });
  });
  return { app };
}
