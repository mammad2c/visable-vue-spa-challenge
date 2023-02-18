<template>
  <div class="restaurant-details p-10">
    <template v-if="isLoading">
      <SkeletonLoading />
    </template>

    <template v-else-if="!data"> The restaurant not found </template>

    <template v-else>
      <h1 class="text-4xl">
        <a :href="data.url">{{ data.name }}</a>
      </h1>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import SkeletonLoading from "@/ui/skeleton-loading";
import { getRestaurantsList } from "@/api/restaurants/get-restaurants-list";

const route = useRoute();

const { data: listData, isLoading } = getRestaurantsList();

const data = computed(() => {
  return listData.value?.data.search.business.find(
    (restaurant) => restaurant.id === route.params.restaurantId,
  );
});
</script>
