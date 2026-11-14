// load the file
// call createApp() -> app is returned
// start the server

import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { Workshop } from "./workshop-core.mts";
import { createApp } from "./app.mts";

const basePath = join(process.cwd(), "data");
const filePath = join(basePath, "workshops.json");
const raw = await readFile(filePath, "utf8");
const seed = JSON.parse(raw) as Workshop[];
const { app } = createApp(seed);

app.listen(3000, () => {
    console.log("Server is running!");
})
