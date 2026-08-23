/*
Slides: 36-38
Concept: Union types
Use: Paste this file into TypeScript Playground.
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
*/

let episodeReference: string | number = "EP-204";

episodeReference = 204;
episodeReference = "EP-318";

// LEARNER TRY:
// Assign false and explain why it is outside the union.
// Restore a string or number before running.

console.log(episodeReference);
