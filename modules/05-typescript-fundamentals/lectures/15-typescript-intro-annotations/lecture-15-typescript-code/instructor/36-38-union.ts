/*
Slides: 36-38
Concept: Union types
Environment: TypeScript Playground, strict checking, ES2020
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
*/

let episodeReference: string | number = "EP-204";

episodeReference = 204;
episodeReference = "EP-318";

// INSTRUCTOR EDIT:
// Add: episodeReference = false;
// EXPECTED DIAGNOSTIC: Type 'boolean' is not assignable to type 'string | number'.
// RESET: Remove the invalid assignment.

console.log(episodeReference);
