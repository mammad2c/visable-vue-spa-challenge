<template>
  <PButton v-bind="$attrs">
    <slot></slot>
  </PButton>
</template>

<script lang="ts" setup>
import PButton from "primevue/button";
</script>
