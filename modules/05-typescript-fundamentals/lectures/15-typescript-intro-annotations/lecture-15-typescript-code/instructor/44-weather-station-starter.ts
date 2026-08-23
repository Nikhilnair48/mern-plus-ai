/*
Slides: 44-47
Activity: Weather observation station
Environment: TypeScript Playground, strict checking, ES2020
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/

let stationName = "North campus";
let temperature = 27;
let isRaining = false;

// BROKEN ON PURPOSE: This assignment should produce one type diagnostic.
temperature = "28";

const hourlyReadings = [26, 27, 28];
const latestReading = ["11:00 AM", 28];

let stationReference = "MY-12";
let alertLevel = "normal";

// LEARNER TODO:
// - Keep stationName inferred.
// - Add the requested primitive annotations.
// - Correct the temperature mismatch.
// - Type the array and tuple.
// - Add the union and literal-value constraints.
// - Assign stationReference = 12 and alertLevel = "watch".
// - Run only after no intended diagnostic remains.

console.log(`${stationName} | ${temperature}°C | ${alertLevel}`);
