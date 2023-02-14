<template>
  <Dropdown :items="items" button-text="Select theme" />
</template>

<script setup lang="ts">
import { themeStore } from "@/store/theme/theme-store";
import Dropdown from "@/ui/dropdown";

const items = themeStore.themes.map((theme) => {
  return {
    command: () => {
      themeStore.setTheme(theme);
    },
    label: theme,
    value: theme,
  };
});

// [
//   {
//     label: "Update",
//     command: () => {
//       this.$toast.add({
//         severity: "success",
//         summary: "Updated",
//         detail: "Data Updated",
//         life: 3000,
//       });
//     },
//   },
// ];
</script>
