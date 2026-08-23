# Lecture 15 TypeScript code-pack validation

## Summary

- TypeScript files checked independently: **21**
- Files expected to type-check: **17**
- Files expected to produce intentional diagnostics: **4**
- TypeScript compiler used for validation: **5.8.3**
- Compiler settings: **strict checking, ES2020 target, no module system**
- Validation failures: **0**

## Type-checking

Every `.ts` file was checked independently, matching the way learners paste one file at a time into TypeScript Playground.

Intentional-error files produced only their expected diagnostics:

- Weather activity starter: one `TS2322` mismatch
- Type repair broken file: two `TS2322` mismatches and one `TS2820` literal-value suggestion

All demonstration files, solutions, and corrected files type-check successfully.

## Inference

Verified inferred types:

- `episodeTitle`: `string`
- `durationMinutes`: `number`
- `isDownloaded`: `boolean`
- `inferredMode`: `string`
- `stationName`: `string`

## Runtime output

Verified output:

```text
Designing for small screens
```

```text
North campus | 28°C | watch
```

```text
PK-4821 | 2.4 kg | sorted
```

## Starter protection

The learner weather and parcel starters were scanned for completed solution annotations.
No solution syntax was found in either starter.

## Scope

The pack contains no:

- interfaces
- type aliases
- typed function parameters or return types
- classes
- enums
- generics
- `any`
- type assertions
- React, Node.js, NPM, or project configuration

## Formatting

- No code line ends after an assignment operator.
- No non-URL line exceeds 110 characters.
- No tab characters were found.
- Short declarations, tuples, unions, calls, and imports remain naturally formatted.

## Packaging

The instructor and learner folders are intentionally flat for fast navigation during class.
The learner package excludes all solutions and fixed-answer files.

Machine-readable details are available in `validation-results.json` in the complete package.
