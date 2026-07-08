import { describe, expect, it } from "vitest";
import { calculateAge, formatDate, readingTime } from "./utils";

describe("readingTime", () => {
  it("returns at least 1 minute for short text", () => {
    expect(readingTime("hello world")).toBe(1);
  });
  it("counts ~200 words per minute", () => {
    expect(readingTime(Array(450).fill("word").join(" "))).toBe(3);
  });
});

describe("calculateAge", () => {
  it("counts full years before this year's birthday", () => {
    expect(calculateAge("2005-10-12", new Date(2026, 6, 8))).toBe(20);
  });
  it("increments on the birthday itself", () => {
    expect(calculateAge("2005-10-12", new Date(2026, 9, 12))).toBe(21);
  });
  it("does not increment the day before the birthday", () => {
    expect(calculateAge("2005-10-12", new Date(2026, 9, 11))).toBe(20);
  });
});

describe("formatDate", () => {
  it("formats ISO dates in Indonesian", () => {
    expect(formatDate("2026-10-12T00:00:00Z")).toBe("12 Oktober 2026");
  });
});
