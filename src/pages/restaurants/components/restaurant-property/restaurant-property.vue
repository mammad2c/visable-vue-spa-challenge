<template>
  <div class="flex items-center">
    <img
      class="inline"
      :src="iconUrl"
      :data-theme-icon="selectedTheme"
      :alt="`${type} icon`"
    />
    <p class="inline">
      {{ value }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { themeStore } from "@/stores/theme-store";

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

const selectedTheme = computed(() => themeStore.selectedTheme.value);
const iconUrl = computed(() => icons[props.type][selectedTheme.value]);
</script>
