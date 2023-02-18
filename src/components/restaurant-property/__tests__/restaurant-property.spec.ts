import { screen } from "@testing-library/vue";
import RestaurantProperty from "../restaurant-property.vue";
import renderComponent from "@/tests/render-component";
import { themeStore } from "@/store/theme/theme-store";

describe("RestaurantProperty", () => {
  it("should render correct icon", () => {
    const value = "test address";
    const { container } = renderComponent(RestaurantProperty, {
      props: {
        type: "address",
        value,
      },
    });

    expect(screen.queryByText(value)).toBeTruthy();
    expect(container.querySelector("img")).toHaveAttribute(
      "data-theme-icon",
      themeStore.selectedTheme.value,
    );
  });
});
