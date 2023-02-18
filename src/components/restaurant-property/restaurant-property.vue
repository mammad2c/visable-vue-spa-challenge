<template>
  <div>
    <img class="inline" :src="iconUrl" :data-theme-icon="theme" />
    <p class="inline">
      {{ value }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { themeStore } from "@/store/theme/theme-store";

interface RestaurantPropertyProps {
  type: "address" | "phone";
  value: string;
}

const props = defineProps<RestaurantPropertyProps>();

const icons = {
  address: {
    dark: "/assets/img/marker-icon-for-dark.svg",
    light: "/assets/img/marker-icon-for-light.svg",
  },
  phone: {
    dark: "/assets/img/phone-icon-for-dark.svg",
    light: "/assets/img/phone-icon-for-light.svg",
  },
};

const theme = computed(() => themeStore.selectedTheme.value);

const iconUrl = icons[props.type][theme.value];
</script>
