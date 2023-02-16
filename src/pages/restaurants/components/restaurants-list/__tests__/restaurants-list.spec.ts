import { screen } from "@testing-library/vue";
import RestaurantsList from "../restaurants-list.vue";
import renderComponent from "@/tests/render-component";

describe("RestaurantsList", () => {
  it("should render properly", () => {
    renderComponent(RestaurantsList);
    expect(screen.queryByText("0 restaurants")).toBeTruthy();
  });
});
