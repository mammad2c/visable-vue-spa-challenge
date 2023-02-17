import { waitFor } from "@testing-library/vue";
import RestaurantsList from "../restaurants-list.vue";
import renderComponent from "@/tests/render-component";

describe("RestaurantsList", () => {
  it("should render list of restaurants", () => {
    const { container } = renderComponent(RestaurantsList);

    waitFor(() => {
      expect(container.querySelector(".restaurant-list-item")).toBeTruthy();
      expect(
        container.querySelector(".restaurant-list-item__title"),
      ).toBeTruthy();
      expect(
        container.querySelector(".restaurant-list-item__location"),
      ).toBeTruthy();
    });
  });
});
