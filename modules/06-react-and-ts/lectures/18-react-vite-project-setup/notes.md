Npm vs Vite

NPM
  -> package manager
  -> package.json

npx: execute command-line tools without permanently downloading these packages into our machine

Vite
  -> Developement/build tool
  -> configuration file

Javascript ES6+
  - Template literal, arrow functions, modules (import/export), etc

// interfaces.ts
export interface User {}




// test.js
export function a() { ... }
export function b() { ... }


// app.js
import { a, b } from "./test.js";

CommonJS
Modules


npm create vite@latest react-intro-lab -- --template react-ts --no-interactive