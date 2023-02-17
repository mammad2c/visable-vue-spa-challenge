<template>
  <div
    :class="{
      'container mx-auto': true,
      'px-4': !noPadding,
      'max-w-none': fluid,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  fluid?: boolean;
  noPadding?: boolean;
}

withDefaults(defineProps<IProps>(), {
  fluid: false,
  noPadding: false,
});
</script>
