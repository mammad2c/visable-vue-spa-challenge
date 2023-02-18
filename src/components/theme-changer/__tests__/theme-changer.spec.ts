import { fireEvent, screen } from "@testing-library/vue";
import ThemeChanger from "../theme-changer.vue";
import { themeStore } from "@/store/theme/theme-store";
import renderComponent from "@/tests/render-component";

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
    expect(themeStore.selectedTheme.value).toBe("light");
  });
});
