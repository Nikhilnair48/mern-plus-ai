/*
Slides: 39-41
Concept: Literal types and an explicit permitted-value set
Environment: TypeScript Playground, strict checking, ES2020
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
*/

let inferredMode = "normal";
let playbackMode: "normal" | "repeat" | "shuffle" = "normal";

// DEMO: Hover over inferredMode.
// EXPECTED INFERRED TYPE: string

playbackMode = "shuffle";

// INSTRUCTOR EDIT:
// Replace "shuffle" with "random".
// EXPECTED DIAGNOSTIC: "random" is outside the permitted literal values.
// RESET: Restore "shuffle".

console.log(inferredMode);
console.log(playbackMode);
