/*
Slides: 39-41
Concept: Literal types and exact permitted values
Use: Paste this file into TypeScript Playground.
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
*/

let inferredMode = "normal";
let playbackMode: "normal" | "repeat" | "shuffle" = "normal";

// LEARNER TRY:
// - Hover over inferredMode and compare it with playbackMode.
// - Assign "random" to playbackMode and inspect the diagnostic.
// - Restore one of the permitted values before running.

playbackMode = "shuffle";

console.log(inferredMode);
console.log(playbackMode);
