import { screen, waitFor } from "@testing-library/vue";
import RestaurantsList from "../restaurants-list.vue";
import renderComponent from "@/tests/render-component";

describe("RestaurantsList", () => {
  it("should render list of restaurants", async () => {
    renderComponent(RestaurantsList);

    await waitFor(() => {
      expect(screen.queryByText(/10 restaurants/i)).toBeTruthy();
      expect(screen.queryByText(/billy the butcher/i)).toBeTruthy();
    });
  });
});
