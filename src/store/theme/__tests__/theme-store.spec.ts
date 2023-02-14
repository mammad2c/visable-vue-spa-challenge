import { themeStore } from "../theme-store";

const defaultTheme = "light";

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
    expect(themeStore.selectedThem.value).toEqual("light");
    themeStore.setTheme("light");
    expect(themeStore.selectedThem.value).toEqual("light");
  });
});
