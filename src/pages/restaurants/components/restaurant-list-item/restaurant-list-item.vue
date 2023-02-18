<template>
  <router-link
    :to="{
      name: 'restaurant-details',
      params: {
        restaurantId: restaurant.id,
      },
    }"
    class="restaurant-list-item block py-6 px-10 hover:bg-gray-200 dark:hover:bg-gray-600"
  >
    <h3 class="text-2xl">{{ restaurant.name }}</h3>
    <RestaurantProperty
      type="address"
      :value="restaurant.location.formatted_address"
    />
  </router-link>
</template>

<script setup lang="ts">
import RestaurantProperty from "@/components/restaurant-property";
import { RestaurantDetails } from "@/types/restaurants";

interface RestaurantsListItemProps {
  restaurant: RestaurantDetails;
}

defineProps<RestaurantsListItemProps>();
</script>
