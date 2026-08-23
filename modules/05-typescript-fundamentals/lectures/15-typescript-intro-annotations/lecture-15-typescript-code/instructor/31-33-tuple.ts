/*
Slides: 31-33
Concept: Tuple positions and position-specific types
Environment: TypeScript Playground, strict checking, ES2020
Docs: https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
*/

const selectedTrack: [number, string] = [12, "Mysuru painting"];

// INSTRUCTOR EDIT:
// Replace 12 with "12".
// EXPECTED DIAGNOSTIC: Type 'string' is not assignable to type 'number'.
// RESET: Restore the number 12.

console.log(selectedTrack);
