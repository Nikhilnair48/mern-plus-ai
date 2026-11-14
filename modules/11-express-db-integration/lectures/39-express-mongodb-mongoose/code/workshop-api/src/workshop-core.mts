/** Workshop request validation carried forward from Lecture 38. */
export type WorkshopInput = { title: string; seats: number };
export type ValidationResult =
  | { ok: true; value: WorkshopInput }
  | { ok: false; details: string[] };

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function parseTitle(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const title = value.trim();
  if (title.length < 3 || title.length > 80) return null;
  return title;
}

export function isValidSeats(value: unknown): value is number {
  return typeof value === "number" &&
    Number.isInteger(value) && value >= 1 && value <= 50;
}

export function validateWorkshopInput(value: unknown): ValidationResult {
  if (!isRecord(value)) {
    return { ok: false, details: ["Body must be a JSON object"] };
  }
  const title = parseTitle(value.title);
  if (title === null) {
    return { ok: false, details: ["title must be 3-80 characters"] };
  }
  if (!isValidSeats(value.seats)) {
    return { ok: false, details: ["seats must be an integer between 1 and 50"] };
  }
  return { ok: true, value: { title, seats: value.seats } };
}

export function parseMinSeats(value: unknown): number | null {
  if (typeof value !== "string" || !/^[1-9]\d*$/.test(value)) return null;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) ? parsed : null;
}