# Event Registration demo - Starter

Instructor starting project for **Lecture 22, beginning at Slide 12**.

## Run

```bash
npm install
npm run dev
```

## Starting point

The page already contains the Event Registration shell, a Name input, the Current React state panel, and all styling required by the later demo states.

The Name input is not connected to React state yet. This keeps the project clean before the controlled-input sequence begins.

## Teaching sequence

Use the files in `../Milestones` as recovery points during live coding.

1. Build the first controlled Name field.
2. Use the inline handler to inspect the inferred event type in VS Code.
3. Extract and explicitly type the Name change handler.
4. Add textarea, select, radio, and checkbox controls.
5. Refactor the related values into one typed form-data object.
6. Render the Registration preview from that same state.
7. Add native constraints, derived validation feedback, and local form submission.

The `Milestones/README.md` maps each snapshot to the lecture slides.
