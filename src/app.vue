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
import { themeStore } from "./store/theme/theme-store";
import Header from "@/components/header";

// this could be configured in a .env file
const headerHeight = 96;
themeStore.loadTheme();
</script>
