/*
Slide: 51
Optional type repair: Corrected state
Environment: TypeScript Playground, strict checking, ES2020
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/

let exportCount: number = 24;
const exportSize: [number, string] = [2048, "px"];
let exportFormat: "jpg" | "png" | "webp" = "jpg";

console.log(exportCount);
console.log(exportSize);
console.log(exportFormat);
