export type Session = {
  id: string;
  title: string;
  track: "react" | "typescript";
};

export const sessions: Session[] = [
  { id: "S-101", title: "React component design", track: "react" },
  { id: "S-102", title: "State without confusion", track: "react" },
  { id: "S-103", title: "TypeScript in practice", track: "typescript" },
  { id: "S-104", title: "Typed props and events", track: "typescript" },
];
