import { join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";

// type Workshop = {
//     _id: Number;
//     title: String;
//     seats: Number;
//     fee: Number;
//     instructorId: Number;
// }

// console.log(process.cwd());
const filePath = join(process.cwd(), "data", "workshops.json");
// console.log(filePath);
const raw = readFileSync(filePath, "utf8");
// console.log(raw);
// console.log(typeof raw);

// const workshops = JSON.parse(raw) as Workshop[];
const workshops = JSON.parse(raw);
// console.log(workshops[0]);


const outputFile = join(process.cwd(), "data", "workshop-count.txt");
writeFileSync(outputFile, `Workshops: ${workshops.length}`);