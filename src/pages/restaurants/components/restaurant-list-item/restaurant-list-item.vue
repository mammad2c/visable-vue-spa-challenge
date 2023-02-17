<template>
  <router-link
    to=""
    class="block py-6 px-10 hover:bg-gray-200 dark:hover:bg-gray-600"
  >
    <h3 class="text-2xl">{{ restaurant.name }}</h3>
    <div>
      <img class="inline" :src="markerIcon" />
      <p class="inline">
        {{ restaurant.location.formatted_address }}
      </p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { RestaurantDetails } from "@/types/restaurants";

interface RestaurantsListItemProps {
  restaurant: RestaurantDetails;
  markerIcon: string;
}

defineProps<RestaurantsListItemProps>();
</script>
