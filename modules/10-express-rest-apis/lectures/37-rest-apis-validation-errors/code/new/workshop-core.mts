/** Framework independent Workshop API model, validation ,etc  */

export type Workshop = {
    _id: number;
    title: string;
    seats: number;
    price: number;
    instructorId: number;
}

export type WorkshopInput = {
    title: string;
    seats: number;
}

export type ValidationResult =
    | { ok: true, value: WorkshopInput }
    | { ok: false, details: string[] };

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" &&
    value !== null &&
    !Array.isArray(value);
}

function parseTitle(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const title = value.trim();
  if (title.length < 3 || title.length > 80)
    return null;
  return title;
}

export function isValidSeats(value: unknown): value is number {
  return typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 1 && value <= 50;
}

export function validateWorkshopInput(v: unknown): ValidationResult {
  if (!isRecord(v)) return {
    ok: false, details: ["Invalid body"] };
  const title = parseTitle(v.title);
  if (title === null) return {
    ok: false, details: ["Invalid title"] };
  if (!isValidSeats(v.seats)) return {
    ok: false, details: ["Invalid seats"] };
  return {ok: true, value: {title, seats: v.seats}};
}

export function initializeWorkshops(seed: Workshop[]) {
    // creating a new map; key -> id, workshop
    return new Map(seed.map((item) => [item._id, { ...item }]));
}