<template>
  <Dropdown :items="items" button-text="Select theme" />
</template>

<script setup lang="ts">
import { themeStore } from "@/stores/theme-store";
import { Dropdown } from "@/ui/dropdown";

const items = themeStore.themes.map((theme) => {
  return {
    command: () => {
      themeStore.setTheme(theme);
    },
    label: theme,
    value: theme,
  };
});
</script>
