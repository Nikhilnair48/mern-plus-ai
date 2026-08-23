/*
Slides: 17-25
Concept: Primitive types, inference, explicit types, and reassignment
Use: Paste this file into TypeScript Playground.
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
Docs: https://www.typescriptlang.org/docs/handbook/type-inference.html
*/

let episodeTitle = "Designing for small screens";
let durationMinutes: number = 38;
let isDownloaded: boolean = false;

// LEARNER TRY:
// - Hover over episodeTitle and record its inferred type.
// - Change episodeTitle to another string.
// - Then try assigning the number 42 and read the diagnostic.
// - Restore a string value before running the code.

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
