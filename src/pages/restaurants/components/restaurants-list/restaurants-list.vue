<template>
  <div v-if="isLoading && !data">
    <SkeletonLoading v-for="i in 5" :key="i" />
  </div>
  <template v-else>
    <RestaurantListItem
      v-for="restaurant in data?.data?.search?.business"
      :key="restaurant.id"
      :restaurant="restaurant"
    />
  </template>
</template>

<script setup lang="ts">
import RestaurantListItem from "../restaurant-list-item";
import { getRestaurantsList } from "@/api/restaurants/get-restaurants-list";
import SkeletonLoading from "@/ui/skeleton-loading";

const { data, isLoading } = getRestaurantsList();
</script>
