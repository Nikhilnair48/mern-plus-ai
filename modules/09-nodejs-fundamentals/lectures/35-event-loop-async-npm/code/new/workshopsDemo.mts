import { readFile } from "node:fs/promises";
import { join } from "node:path";

const filePath = join(process.cwd(), "data", "workshops.json");

/*
readFile(filePath, (err: NodeJS.ErrnoException | null, data: NonSharedBuffer) => {
    // is there an error in reading the file?
    if (err) {
        console.log("Error reading the file!");
        return;
    }

    console.log(data);
})
*/

async function readMyFile() {
    const data = await readFile(filePath, { encoding: "utf8" });
    console.log(data);
}

readMyFile();