<template>
  <div class="restaurant-details p-10">
    <template v-if="isLoading">
      <SkeletonLoading />
    </template>

    <template v-else-if="!data"> The restaurant not found </template>

    <template v-else>
      <h1 class="text-3xl font-bold mb-6">
        <a
          class="underline underline-offset-8"
          :href="data.url"
          target="_blank"
          >{{ data.name }}</a
        >
      </h1>

      <div class="mb-6">
        <span class="font-bold text-lg">Rating:</span>
        {{ data.rating }}
      </div>

      <RestaurantProperty
        class="mb-6"
        type="address"
        :value="data.location.formatted_address"
      />

      <RestaurantProperty class="mb-10" type="phone" :value="formattedPhone" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { SkeletonLoading } from "@/ui/skeleton-loading";
import { getRestaurantsList } from "@/api/restaurants/get-restaurants-list";
import { RestaurantProperty } from "@/components/restaurant-property";
import { phoneFormatter } from "@/utils/phone-formatter";

const route = useRoute();

const { data: listData, isLoading } = getRestaurantsList();

const data = computed(() => {
  return listData.value?.data.search.business.find(
    (restaurant) => restaurant.id === route.params.restaurantId,
  );
});

const formattedPhone = computed(() => phoneFormatter(data.value?.phone));
</script>
