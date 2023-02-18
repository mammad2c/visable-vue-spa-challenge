import { screen, waitFor } from "@testing-library/vue";
import RestaurantDetails from "..";
import { renderComponent } from "@/tests/render-component";
import { router } from "@/router";

beforeAll(async () => {
  router.push({
    name: "restaurant-details",
    params: {
      restaurantId: "g3jk6ppJc_NdKKhv1JGa7w",
    },
  });

  await router.isReady();
});

describe("RestaurantDetails", () => {
  it("should render properly", async () => {
    // const { container } = renderComponent(RestaurantDetails);
    renderComponent(RestaurantDetails);

    await waitFor(() => {
      expect(screen.getByText(/Billy The Butcher/i)).toBeTruthy();
      // expect(
      //   container.querySelector(".restaurant-details__photo"),
      // ).toBeTruthy();
      // expect(screen.getByText(/rating:/i)).toBeTruthy();
      // expect(screen.getByText(/reviews/i)).toBeTruthy();
    });
  });
});
