import { describe, expect, it } from "vitest";
import { themeStore } from "../theme-store";

const defaultTheme = "system";

describe("theme-store", () => {
  it("should be defined", () => {
    expect(themeStore).toBeDefined();
  });

  it("should have a default theme", () => {
    expect(themeStore.selectedThem.value).toEqual(defaultTheme);
  });

  it("should set the theme", () => {
    themeStore.setTheme("dark");
    expect(themeStore.selectedThem.value).toEqual("dark");
    themeStore.setTheme("system");
    expect(themeStore.selectedThem.value).toEqual("system");
    themeStore.setTheme("light");
    expect(themeStore.selectedThem.value).toEqual("light");
  });
});
