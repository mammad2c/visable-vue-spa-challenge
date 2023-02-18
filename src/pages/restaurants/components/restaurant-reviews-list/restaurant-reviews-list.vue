<template>
  <div class="restaurant-reviews-list">
    <h3 class="font-bold text-2xl mb-4">Reviews</h3>

    <ul class="list-disc pl-10">
      <li v-for="(review, index) in reviews" :key="index">
        <div class="mb-4">
          <span class="font-bold"> Rating: </span>
          <span>{{ review.rating }}</span>
        </div>

        <p class="mb-4">
          {{ review.text }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RestaurantReview } from "@/types/restaurant";

interface RestaurantReviewsListProps {
  reviews: RestaurantReview[];
}

defineProps<RestaurantReviewsListProps>();
</script>
