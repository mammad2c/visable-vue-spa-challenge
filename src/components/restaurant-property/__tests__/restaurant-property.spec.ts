import { screen } from "@testing-library/vue";
import { nextTick } from "vue";
import { RestaurantProperty } from "..";
import { renderComponent } from "@/tests/render-component";
import { themeStore } from "@/stores/theme-store";

describe("RestaurantProperty", () => {
  it("should render correct icon", async () => {
    const value = "test address";
    const { container } = renderComponent(RestaurantProperty, {
      props: {
        type: "address",
        value,
      },
    });

    themeStore.setTheme("dark");

    const img = container.querySelector("img");

    await nextTick();

    expect(screen.queryByText(value)).toBeTruthy();
    expect(img).toHaveAttribute(
      "data-theme-icon",
      themeStore.selectedTheme.value,
    );

    themeStore.setTheme("light");
    await nextTick();
    expect(container.querySelector("img")).toHaveAttribute(
      "data-theme-icon",
      themeStore.selectedTheme.value,
    );
  });
});
