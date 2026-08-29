# Profile Editor - Starter

Learner activity starter for **Lecture 22, Slides 32 to 36**.

## Run

```bash
npm install
npm run dev
```

## Already completed

- `ProfileFormData` type
- `initialProfile` object
- Display name input
- Bio textarea with a 100-character limit
- Role select and role options
- Open to collaboration checkbox
- Profile preview layout
- styling

The controls begin as uncontrolled form controls. The activity converts them so React state owns their current values.

## Your task

1. Store `initialProfile` in state.
2. Make Display name controlled with a typed extracted change handler.
3. Make Bio and Role controlled with the correct event element types.
4. Make Open to collaboration controlled as a boolean value.
5. Update one property without removing the other profile properties.
6. Render the Profile preview from the current profile state.
7. Calculate the remaining Bio characters from `profile.bio`.

## Completion check

Use these values:

```text
Display name: Elena Ortiz
Bio: Building accessible React interfaces with TypeScript
Role: Frontend Developer
Open to collaboration: checked
```

The Bio contains 52 characters, so the interface should show `48 characters remaining`.
