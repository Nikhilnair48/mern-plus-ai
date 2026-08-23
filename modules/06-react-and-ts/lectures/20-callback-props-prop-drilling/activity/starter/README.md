# Document approval activity starter

This project is the starter for the Lecture 20 classroom activity.

## Run the project

```bash
npm install
npm run dev
```

## Current structure

```text
ReviewPage
└── ReviewActions
    └── ApproveButton
```

The project already owns and displays the current document ID:

```text
DOC-481
```

The **Approve** button is visible but intentionally inactive.

## Your task

Make the Approve interaction trigger application-level approval behaviour using the existing document ID.

Expected result:

```text
Approved DOC-481
```

Requirements:

- keep the existing component hierarchy;
- use typed props;
- use a callback that can receive the document ID as a `string`;
- use the existing `documentId` rather than hardcoding `"DOC-481"` inside `ApproveButton`;
- use an `on...` name for the callback prop;
- keep the project type-safe.
