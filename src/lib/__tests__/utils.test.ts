import { describe, it, expect } from "vitest";
import { cn } from "../utils";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    const result = cn("base-class", "additional-class");
    expect(result).toBe("base-class additional-class");
  });

  it("handles conditional classes", () => {
    const result = cn("base-class", false && "hidden", "visible");
    expect(result).toBe("base-class visible");
  });

  it("handles undefined and null values", () => {
    const result = cn("base-class", undefined, null, "final-class");
    expect(result).toBe("base-class final-class");
  });
});
