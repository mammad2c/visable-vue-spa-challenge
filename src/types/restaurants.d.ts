export interface RestaurantLocation {
  address1: string;
  city: string;
  postal_code: string;
  formatted_address: string;
}

export interface RestaurantReview {
  text: string;
  rating: number;
}

export interface RestaurantDetails {
  name: string;
  id: string;
  url: string;
  phone: string;
  display_phone: string;
  rating: number;
  photos: string[];
  location: RestaurantLocation;
  reviews: RestaurantReview[];
}

export type RestaurantsList = RestaurantDetails[];

export interface RestaurantSearchResult {
  data: {
    search: {
      business: RestaurantsList;
      total: number;
    };
  };
}
