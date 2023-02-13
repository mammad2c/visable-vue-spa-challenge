<template>
  <div
    :class="{
      [`col-span-${cols}`]: true,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface IProps {
  cols?: number | string;
}

const props = withDefaults(defineProps<IProps>(), {
  cols: 12,
});

const isColsNumber = !isNaN(Number(props.cols));

if (!isColsNumber) {
  throw new Error(`cols must be a number, received: ${props.cols}`);
}

if (isColsNumber && (props.cols < 1 || props.cols > 12)) {
  throw new Error(
    `cols must be a number between 1 and 12, received: ${props.cols}`,
  );
}
</script>
