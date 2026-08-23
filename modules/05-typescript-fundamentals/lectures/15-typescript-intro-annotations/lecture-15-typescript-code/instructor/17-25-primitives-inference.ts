/*
Slides: 17-25
Concept: Primitive types, inference, explicit types, and reassignment
Environment: TypeScript Playground, strict checking, ES2020
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
Docs: https://www.typescriptlang.org/docs/handbook/type-inference.html
*/

let episodeTitle = "Designing for small screens";
let durationMinutes: number = 38;
let isDownloaded: boolean = false;

// DEMO: Hover over episodeTitle.
// EXPECTED INFERRED TYPE: string

// INSTRUCTOR EDIT:
// Temporarily replace the next assignment with: episodeTitle = 42;
// EXPECTED DIAGNOSTIC: Type 'number' is not assignable to type 'string'.
// RESET: Restore the string assignment below.

episodeTitle = "Async workflows";
durationMinutes = 42;
isDownloaded = true;

const podcastName: string = "Frontend Field Notes";
let selectedEpisode: string;
selectedEpisode = "Async workflows";

console.log(episodeTitle);
console.log(durationMinutes);
console.log(isDownloaded);
console.log(podcastName);
console.log(selectedEpisode);
