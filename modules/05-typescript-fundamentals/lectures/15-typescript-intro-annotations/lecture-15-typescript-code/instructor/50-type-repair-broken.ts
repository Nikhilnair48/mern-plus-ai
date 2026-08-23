/*
Slide: 50
Optional type repair: Broken state
Environment: TypeScript Playground, strict checking, ES2020
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/

// BROKEN ON PURPOSE: Find and correct three independent mismatches.

let exportCount: number = "24";
const exportSize: [number, string] = ["2048", "px"];
let exportFormat: "jpg" | "png" | "webp" = "jpeg";
