import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import ThemeChanger from "../theme-changer.vue";

describe("ThemeChanger", () => {
  it("renders properly", () => {
    render(ThemeChanger);
    expect(screen.getByText(/select theme/i)).toBeTruthy();
  });

  // it("should render change the theme", () => {
  //   render(ThemeChanger);
  // });
});
