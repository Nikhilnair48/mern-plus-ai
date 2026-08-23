/*
Slide: 49
Homework solution: Parcel sorting console
Environment: TypeScript Playground, strict checking, ES2020
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/

let trackingLabel = "PK-4821";
let weightKg: number = 2.4;
let isFragile: boolean = true;

const scannedWeights: number[] = [1.8, 2.4, 3.1];
const latestScan: [string, number] = ["PK-4821", 2.4];

let parcelReference: string | number = "PK-4821";
parcelReference = 4821;

let parcelState: "received" | "sorted" | "dispatched" = "received";
parcelState = "sorted";

console.log(`${trackingLabel} | ${weightKg} kg | ${parcelState}`);

// EXPECTED OUTPUT:
// PK-4821 | 2.4 kg | sorted
