import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { createApp } from "./app.mts";
import type { Workshop } from "./workshop-core.mts";
import { pool } from "./db.mts";

async function main() {
  try {
    await pool.query("SELECT 1");
    const path = join(process.cwd(), "data", "workshops.json");
    const seed = JSON.parse(await readFile(path, "utf8")) as Workshop[];
    const { app } = createApp(seed);
    const port = Number(process.env.PORT ?? 3000);
    const server = app.listen(port, () => {
      const address = server.address();
      const actual = typeof address === "object" && address ? address.port : port;
      console.log(`Listening on http://localhost:${actual}`);
    });
  } catch (error) {
    console.error("Database startup failed", error);
    await pool.end();
  }
}

main();