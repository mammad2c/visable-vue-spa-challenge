<template>
  <router-link
    active-class="bg-secondary dark:bg-gray-900"
    :to="{
      name: 'restaurant-details',
      params: {
        restaurantId: restaurant.id,
      },
    }"
    class="restaurant-list-item block py-6 px-10 hover:bg-secondary dark:bg-gray-600 dark:hover:bg-gray-900"
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
