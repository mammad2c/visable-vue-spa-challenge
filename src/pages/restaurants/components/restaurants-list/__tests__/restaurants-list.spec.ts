import { fireEvent, screen, waitFor } from "@testing-library/vue";
import { RestaurantsList } from "..";
import { renderComponent } from "@/tests/render-component";
import { router } from "@/router";

describe("RestaurantsList", () => {
  it("should render list of restaurants", async () => {
    renderComponent(RestaurantsList);

    await waitFor(() => {
      expect(screen.queryByText(/10 restaurants/i)).toBeTruthy();
      expect(screen.queryByText(/billy the butcher/i)).toBeTruthy();
    });
  });

  it("should navigate to restaurant details", async () => {
    const { container } = renderComponent(RestaurantsList);

    await waitFor(() => {
      expect(screen.queryByText(/10 restaurants/i)).toBeTruthy();
    });

    const restaurantListItem = container.querySelector(".restaurant-list-item");
    expect(restaurantListItem).toBeTruthy();

    if (restaurantListItem) {
      await fireEvent.click(restaurantListItem);

      await router.isReady();

      expect(window.location.pathname).toBe(
        restaurantListItem.getAttribute("href"),
      );
    }
  });
});
