export type ReadingStatus = "queued" | "reading" | "finished";

export type ReadingItem = {
  id: string;
  title: string;
  status: ReadingStatus;
};

export const initialReadingItems: ReadingItem[] = [
  { id: "R-102", title: "Understanding closures", status: "queued" },
  { id: "R-205", title: "React rendering", status: "reading" },
  { id: "R-309", title: "TypeScript narrowing", status: "finished" }
];
