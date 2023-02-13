<template>
  <div
    :class="{
      'container px-4 mx-auto': true,
      'max-w-none': fluid,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface IProps {
  fluid?: boolean;
}

withDefaults(defineProps<IProps>(), {
  fluid: false,
});
</script>
