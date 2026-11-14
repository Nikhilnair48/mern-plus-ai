import assert from "node:assert/strict";
import test from "node:test";
import { parseMinSeats, validateWorkshopInput } from "../src/workshop-core.mts";

test("valid workshop is trimmed and accepted", () => {
  const result = validateWorkshopInput({ title: "  Intro to Pottery  ", seats: 12 });
  assert.deepEqual(result, { ok: true, value: { title: "Intro to Pottery", seats: 12 } });
});
test("invalid title, seat count, and body are rejected", () => {
  for (const body of [{ title: "Hi", seats: 12 }, { title: "Valid", seats: 0 }, null]) {
    assert.equal(validateWorkshopInput(body).ok, false);
  }
});
test("unknown properties cannot enter the model through request validation", () => {
  assert.deepEqual(validateWorkshopInput({ title: "Pottery", seats: 12, injected: "no" }),
    { ok: true, value: { title: "Pottery", seats: 12 } });
});
test("minSeats accepts positive integer strings only", () => {
  assert.equal(parseMinSeats("15"), 15);
  for (const value of [undefined, "0", "3.5", "-1", ["10"]]) {
    assert.equal(parseMinSeats(value), null);
  }
});
