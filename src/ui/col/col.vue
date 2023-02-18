<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface ColProps {
  cols?: number | string;
}

const props = withDefaults(defineProps<ColProps>(), {
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

const classNames = [
  "col-span-1",
  "col-span-2",
  "col-span-3",
  "col-span-4",
  "col-span-5",
  "col-span-6",
  "col-span-7",
  "col-span-8",
  "col-span-9",
  "col-span-10",
  "col-span-11",
  "col-span-12",
];

const className = computed<string>(
  () => classNames[Number(props.cols) - 1] || "",
);
</script>
