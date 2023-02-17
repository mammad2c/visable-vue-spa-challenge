import { apiGenerator } from "@/services/api-generator";
import { RestaurantSearchResult } from "@/types/restaurants";

const getRestaurantsList = apiGenerator<RestaurantSearchResult>({
  method: "GET",
  queryKey: "restaurants-list",
  url: "/data.json",
});

export { getRestaurantsList };
