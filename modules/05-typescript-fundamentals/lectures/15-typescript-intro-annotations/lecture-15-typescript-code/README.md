# Lecture 15 TypeScript code pack

This pack supports **Lecture 15: TypeScript fundamentals**.

The files are intentionally small and focused. They are designed for TypeScript Playground, not for a local Node.js project.

## Folders

- `instructor/`: complete demonstrations, edit guidance, solutions, and broken/fixed repair files
- `learner/`: learner-facing demonstrations, activity starter, homework starter, and broken repair file

Both folders are flat so files can be opened quickly during class.

## Runtime

1. Open TypeScript Playground: https://www.typescriptlang.org/play
2. Select TypeScript.
3. Enable strict checking.
4. Use an ES2020 target.
5. Paste one `.ts` file at a time.

No NPM, Node.js, `package.json`, `tsconfig.json`, or local compiler setup is required.

## Teaching order

| Slides | File | Purpose |
|---:|---|---|
| 13-16 | `13-16-playground-flow.ts` | TypeScript source, emitted JavaScript, runtime output |
| 17-25 | `17-25-primitives-inference.ts` | Primitive types, inference, explicit types |
| 28-30 | `28-30-typed-array.ts` | Typed arrays |
| 31-33 | `31-33-tuple.ts` | Tuple positions |
| 36-38 | `36-38-union.ts` | Union types |
| 39-41 | `39-41-literal-types.ts` | Literal types |
| 44-48 | `44-weather-station-starter.ts` and solution | Activity |
| 49 | `49-parcel-sorting-starter.ts` and solution | Homework |
| 50-51 | `50-type-repair-broken.ts` and fixed file | Optional repair |

## Official TypeScript references

- Everyday Types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- Type Inference: https://www.typescriptlang.org/docs/handbook/type-inference.html
- Tuple Types: https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
- Playground overview: https://www.typescriptlang.org/_playground-handbook/overview.html

## Validation

See `VALIDATION.md` and `validation-results.json`.
Each `.ts` file is validated independently because learners use one file at a time in Playground.
