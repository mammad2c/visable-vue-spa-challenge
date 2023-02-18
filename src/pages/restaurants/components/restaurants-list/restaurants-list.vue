<template>
  <div
    class="border-r border-gray-500 overflow-y-auto"
    :style="{
      height: `calc(100vh - ${themeStore.headerHeight}px)`,
    }"
  >
    <div v-if="isLoading && !data" class="p-10">
      <SkeletonLoading height="3rem" />
      <SkeletonLoading v-for="i in 5" :key="i" class="my-10" />
    </div>

    <template v-else-if="data?.data.search.total === 0">
      <div class="p-10">No restaurants found</div>
    </template>

    <template v-else>
      <h2 class="text-xl font-bold py-6 px-10 bg-gray-300 dark:bg-gray-800">
        {{ data?.data.search.total }} Restaurants
      </h2>
      <div class="divide-y divide-gray-300">
        <RestaurantListItem
          v-for="restaurant in data?.data?.search?.business"
          :key="restaurant.id"
          :restaurant="restaurant"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { RestaurantListItem } from "../restaurant-list-item";
import { getRestaurantsList } from "@/api/restaurants/get-restaurants-list";
import { SkeletonLoading } from "@/ui/skeleton-loading";
import { themeStore } from "@/stores/theme-store";

const { data, isLoading } = getRestaurantsList();
</script>
