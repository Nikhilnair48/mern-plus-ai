/** Framework-independent Workshop API model and runtime validation. */
export type Workshop = { _id: number; title: string; seats: number };
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
    return { ok: false, details: ["title must be 3–80 characters"] };
  }
  if (!isValidSeats(value.seats)) {
    return {
      ok: false,
      details: ["seats must be an integer between 1 and 50"]
    };
  }
  return { ok: true, value: { title, seats: value.seats } };
}

export function parseWorkshopId(raw: string): number | null {
  if (!/^[1-9]\d*$/.test(raw)) return null;
  const id = Number(raw);
  return Number.isSafeInteger(id) ? id : null;
}

export function parseMinSeats(raw: unknown): number | null {
  if (typeof raw !== "string" || !/^[1-9]\d*$/.test(raw)) return null;
  const value = Number(raw);
  return Number.isSafeInteger(value) ? value : null;
}

export function parseGroupSize(raw: unknown): number | null {
  return typeof raw === "number" && Number.isSafeInteger(raw) && raw > 0
    ? raw : null;
}

export function initializeWorkshops(seed: Workshop[]): Map<number, Workshop> {
  return new Map(seed.map((item) => [item._id, { ...item }]));
}

export function workshopSummary(workshops: Map<number, Workshop>) {
  const items = [...workshops.values()];
  return {
    count: items.length,
    totalSeats: items.reduce((sum, item) => sum + item.seats, 0)
  };
}
