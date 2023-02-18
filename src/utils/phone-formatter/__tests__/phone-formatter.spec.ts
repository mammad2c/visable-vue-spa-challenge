import { phoneFormatter } from "..";

describe("phoneFormatter", () => {
  it("should generate phone number and add spaces to make the number more readable", async () => {
    expect(phoneFormatter("+494057283299")).toBe("+49 40 57283299");
    expect(phoneFormatter("+494033441852")).toBe("+49 40 33441852");
  });

  it("should handle falsy values", async () => {
    expect(phoneFormatter("")).toBe("");
    expect(phoneFormatter(undefined)).toBe("");
    expect(phoneFormatter()).toBe("");
  });
});
