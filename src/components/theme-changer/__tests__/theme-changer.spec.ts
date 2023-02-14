import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/vue";
import PrimeVue from "primevue/config";
import ThemeChanger from "../theme-changer.vue";
import router from "@/router";
import { themeStore } from "@/store/theme/theme-store";

const renderComponent = (props = {}) =>
  render(ThemeChanger, {
    global: {
      plugins: [PrimeVue, router],
    },
    props,
  });

describe("ThemeChanger", () => {
  it("renders properly", () => {
    renderComponent(ThemeChanger);
    expect(screen.getByText(/select theme/i)).toBeTruthy();
  });

  it("should render change the theme", async () => {
    renderComponent(ThemeChanger);

    // open themes
    await fireEvent.click(screen.getByText(/select theme/i));

    // check light theme is exists
    const light = screen.getByText(/light/i);
    expect(light).toBeTruthy();

    // click on the light theme
    await fireEvent.click(light);
    expect(themeStore.selectedThem.value).toBe("light");
  });
});
