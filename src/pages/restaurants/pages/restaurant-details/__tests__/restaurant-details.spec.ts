import { screen, waitFor } from "@testing-library/vue";
import RestaurantDetails from "..";
import { renderComponent } from "@/tests/render-component";
import { router } from "@/router";

const mockedData = {
  display_phone: "+49 40 57283299",
  id: "g3jk6ppJc_NdKKhv1JGa7w",
  location: {
    address1: "Jungfernstieg 16 - 20",
    city: "Hamburg",
    formatted_address: "Jungfernstieg 16 - 20\n4. OG\n20354 Hamburg\nGermany",
    postal_code: "20354",
  },
  name: "Billy The Butcher",
  phone: "+494057283299",
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/RDKmsxZZczP4EiTCB9AYOw/o.jpg",
  ],
  rating: 4,
  reviews: [
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
  ],
  url: "https://www.yelp.com/biz/billy-the-butcher-hamburg-2?adjust_creative=nMAD8ywU1QBl_RMSM215Bg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=nMAD8ywU1QBl_RMSM215Bg",
};

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
    const { container } = renderComponent(RestaurantDetails);

    await waitFor(() => {
      expect(screen.getAllByText(mockedData.name)[0]).toBeTruthy();
      expect(screen.getByAltText(/restaurant logo/i)).toBeTruthy();
      expect(container.querySelector(".restaurant-reviews-list")).toBeTruthy();
    });
  });
});
