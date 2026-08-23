/*
Slides: 28-30
Concept: Typed arrays
Environment: TypeScript Playground, strict checking, ES2020
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
*/

const queueTitles: string[] = [
  "JavaScript modules",
  "Async workflows",
  "TypeScript basics"
];

// INSTRUCTOR EDIT:
// Replace "TypeScript basics" with 42.
// EXPECTED DIAGNOSTIC: Type 'number' is not assignable to type 'string'.
// RESET: Restore "TypeScript basics".

console.log(queueTitles);
