import { themeStore } from "..";

const defaultTheme = "light";

describe("theme-store", () => {
  it("should be defined", () => {
    expect(themeStore).toBeDefined();
  });

  it("should have a default theme", () => {
    expect(themeStore.selectedTheme.value).toEqual(defaultTheme);
  });

  it("should set the theme", () => {
    themeStore.setTheme("dark");
    expect(themeStore.selectedTheme.value).toEqual("dark");
    themeStore.setTheme("system");
    expect(themeStore.selectedTheme.value).toMatch(/^dark|light$/);
    themeStore.setTheme("light");
    expect(themeStore.selectedTheme.value).toEqual("light");
  });
});
