/*
Slide: 50
Optional type repair
Use: Paste this file into TypeScript Playground.
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/

// Find three independent mismatches.
// For each one, identify the expected type or permitted values,
// the received type or value, and the smallest correction.

let exportCount: number = "24";
const exportSize: [number, string] = ["2048", "px"];
let exportFormat: "jpg" | "png" | "webp" = "jpeg";
