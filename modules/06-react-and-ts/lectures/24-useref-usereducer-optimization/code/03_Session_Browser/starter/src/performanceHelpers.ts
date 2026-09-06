import type { Session } from "./sessionData";

export const FILTER_DELAY_MS = 140;
export const CHILD_RENDER_DELAY_MS = 110;

function addTeachingDelay(milliseconds: number) {
  const start = performance.now();

  while (
    performance.now() - start <
    milliseconds
  ) {
    // Teaching only: intentionally blocks the main thread briefly.
  }
}

export function slowFilterSessions(
  sessions: Session[],
  query: string,
): Session[] {
  addTeachingDelay(FILTER_DELAY_MS);

  const normalizedQuery =
    query.trim().toLowerCase();

  if (!normalizedQuery) {
    return sessions;
  }

  return sessions.filter((session) =>
    `${session.title} ${session.track} ${session.speaker}`
      .toLowerCase()
      .includes(normalizedQuery),
  );
}

export function addSlowSessionListRender() {
  addTeachingDelay(
    CHILD_RENDER_DELAY_MS,
  );
}
