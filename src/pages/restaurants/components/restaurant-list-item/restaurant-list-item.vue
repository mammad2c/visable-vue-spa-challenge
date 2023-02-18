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
    <h3 class="text-xl font-bold">{{ restaurant.name }}</h3>
    <RestaurantProperty type="address" :value="address" />
  </router-link>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RestaurantProperty } from "@/pages/restaurants/components/restaurant-property";
import { RestaurantDetails } from "@/types/restaurant";

interface RestaurantsListItemProps {
  restaurant: RestaurantDetails;
}

const props = defineProps<RestaurantsListItemProps>();

const address = computed(
  () =>
    `${props.restaurant.location.address1}, ${props.restaurant.location.city}`,
);
</script>
