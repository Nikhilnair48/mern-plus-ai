/*
Slide: 48
Activity solution: Weather observation station
Environment: TypeScript Playground, strict checking, ES2020
Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/

let stationName = "North campus";
let temperature: number = 27;
let isRaining: boolean = false;

temperature = 28;

const hourlyReadings: number[] = [26, 27, 28];
const latestReading: [string, number] = ["11:00 AM", 28];

let stationReference: string | number = "MY-12";
stationReference = 12;

let alertLevel: "normal" | "watch" | "warning" = "normal";
alertLevel = "watch";

console.log(`${stationName} | ${temperature}°C | ${alertLevel}`);

// EXPECTED OUTPUT:
// North campus | 28°C | watch
