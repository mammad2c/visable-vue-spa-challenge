<template>
  <Button
    type="button"
    label="Toggle"
    @click="toggle"
    aria-haspopup="true"
    aria-controls="overlay_menu"
  >
    Select theme
  </Button>

  <Menu id="theme-menu" ref="menu" :model="items" :popup="true" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { themeStore } from "@/store/theme/theme-store";

const menu = ref();

const items = themeStore.themes.map((theme) => {
  return {
    command: () => {
      themeStore.setTheme(theme);
    },
    label: theme,
    value: theme,
  };
});

const toggle = (event: MouseEvent) => {
  menu.value.toggle(event);
};

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
