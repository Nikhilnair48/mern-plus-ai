import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { createApp } from "./app.mts";
import type { Workshop } from "./workshop-core.mts";

// Unlike Lecture 36, this happens once at startup rather than on each GET.
const path = join(process.cwd(), "data", "workshops.json");
const seed = JSON.parse(await readFile(path, "utf8")) as Workshop[];
const { app } = createApp(seed);
const port = Number(process.env.PORT ?? 3000);
const server = app.listen(port, () => {
  const address = server.address();
  const actual = typeof address === "object" && address ? address.port : port;
  console.log(`Listening on http://localhost:${actual}`);
});
