import { screen } from "@testing-library/vue";
import { RestaurantReviewsList } from "..";
import { renderComponent } from "@/tests/render-component";

const reviews = [
  {
    rating: 4,
    text: "I've had decent lunches at Billy The Butcher a couple of times now. It's what I would describe as a trendy burger joint on the 4th floor of the Alsterhaus...",
  },
  {
    rating: 4,
    text: "We arrived Hamburg at noon and decide to get some burgers before going to the office. This place is pretty close to the city hall and rated well.\n\nI ordered...",
  },
  {
    rating: 4,
    text: "Nice place to have good burger for lunch. Most of personnel speak English which is good. Prices are decent, also I would recommend to share fries with a...",
  },
];

describe("RestaurantReviewsList", () => {
  it("should render properly", () => {
    renderComponent(RestaurantReviewsList, {
      props: {
        reviews,
      },
    });

    expect(screen.getByText(/reviews/i)).toBeTruthy();
    expect(screen.getAllByText(reviews[0].rating)[0]).toBeTruthy();
    expect(screen.getAllByText(reviews[0].text)[0]).toBeTruthy();
  });
});
