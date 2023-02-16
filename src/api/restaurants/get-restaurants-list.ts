import { apiGenerator } from "@/services/api-generator";

const getRestaurantsList = apiGenerator({
  method: "POST",
  queryKey: "restaurants-list",
  url: "/data.json",
});

export { getRestaurantsList };
