/*
Slide: 49
Homework starter: Parcel sorting console
Environment: TypeScript Playground, strict checking, ES2020
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/

let trackingLabel = "PK-4821";
let weightKg = 2.4;
let isFragile = true;

const scannedWeights = [1.8, 2.4, 3.1];
const latestScan = ["PK-4821", 2.4];

let parcelReference = "PK-4821";
let parcelState = "received";

// LEARNER TODO:
// - Keep trackingLabel inferred.
// - Add the required primitive annotations.
// - Type scannedWeights and latestScan.
// - Add the string-or-number reference type.
// - Restrict parcelState to the three permitted values.
// - Update parcelState to "sorted".

console.log(`${trackingLabel} | ${weightKg} kg | ${parcelState}`);
