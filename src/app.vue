<template>
  <Header :height="headerHeight" />
  <main
    :style="{
      height: `calc(100vh - ${headerHeight}px)`,
    }"
  >
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { themeStore } from "./stores/theme-store";
import { Header } from "@/components/header";

themeStore.loadTheme();

// this could be configured in a .env file
const headerHeight = computed(() => themeStore.headerHeight);
</script>
