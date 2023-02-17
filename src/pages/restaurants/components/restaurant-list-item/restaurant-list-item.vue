<template>
  <router-link to="" class="restaurant-list-item block py-2">
    <h3 class="restaurant-list-item__title text-2xl">{{ restaurant.name }}</h3>
    <div class="restaurant-list-item__location">
      {{ restaurant.location.formatted_address }}
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { RestaurantDetails } from "@/types/restaurants";

interface RestaurantsListItemProps {
  restaurant: RestaurantDetails;
}

defineProps<RestaurantsListItemProps>();
</script>
