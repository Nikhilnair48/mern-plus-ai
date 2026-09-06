export type SessionLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type Session = {
  id: string;
  title: string;
  track: string;
  level: SessionLevel;
  speaker: string;
};

const reactTitles = [
  "React performance patterns",
  "React component design",
  "Testing React applications",
  "Type-safe React forms",
];

const otherTitles = [
  "Accessible component APIs",
  "State modeling in TypeScript",
  "Modern CSS layouts",
  "Practical frontend architecture",
  "Debugging component state",
  "Building resilient interfaces",
];

const tracks = [
  "Performance",
  "TypeScript",
  "Accessibility",
  "Testing",
  "Architecture",
];

const speakers = [
  "Aarav Mehta",
  "Nina Shah",
  "Maya Rao",
  "Kabir Iyer",
  "Leena Nair",
  "Rohan Das",
];

const levels: SessionLevel[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

export const allSessions: Session[] =
  Array.from(
    { length: 2500 },
    (_, index) => {
      const isReactSession =
        index < 134;

      const titlePool = isReactSession
        ? reactTitles
        : otherTitles;

      return {
        id: `S-${String(
          index + 1,
        ).padStart(4, "0")}`,
        title: `${
          titlePool[
            index % titlePool.length
          ]
        } ${
          Math.floor(
            index / titlePool.length,
          ) + 1
        }`,
        track:
          tracks[index % tracks.length],
        level:
          levels[index % levels.length],
        speaker:
          speakers[
            index % speakers.length
          ],
      };
    },
  );
