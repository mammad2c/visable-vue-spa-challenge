<template>
  <div class="restaurant-details p-10">
    <template v-if="isLoading">
      <Loading />
    </template>

    <template v-else-if="!data"> The restaurant not found </template>

    <template v-else>
      <Row class="mb-10">
        <Col cols="9">
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

          <RestaurantProperty type="phone" :value="formattedPhone" />
        </Col>

        <Col cols="3">
          <img :src="data.photos[0]" alt="Restaurant logo" />
        </Col>
      </Row>

      <RestaurantReviewsList :reviews="data.reviews" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import Loading from "./loading.vue";
import { getRestaurantsList } from "@/api/restaurants/get-restaurants-list";
import { RestaurantProperty } from "@/pages/restaurants/components/restaurant-property";
import { phoneFormatter } from "@/utils/phone-formatter";
import { Row } from "@/ui/row";
import { Col } from "@/ui/col";
import { RestaurantReviewsList } from "@/pages/restaurants/components/restaurant-reviews-list";

const route = useRoute();

const { data: listData, isLoading } = getRestaurantsList();

const data = computed(() => {
  return listData.value?.data.search.business.find(
    (restaurant) => restaurant.id === route.params.restaurantId,
  );
});

const formattedPhone = computed(() => phoneFormatter(data.value?.phone));
</script>
