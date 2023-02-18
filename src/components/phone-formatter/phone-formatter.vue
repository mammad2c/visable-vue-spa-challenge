<template>
  <span>{{ formattedValue }}</span>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface PhoneFormatterProps {
  value: string;
}

const props = defineProps<PhoneFormatterProps>();

const phoneCodes = [
  {
    cities: [
      {
        code: "40",
        name: "Hamburg",
      },
    ],
    countryCode: "49",
    name: "Germany",
  },
];

const countryCode = computed(() => props.value.slice(0, 3));
const cityCode = computed(() => props.value.slice(3, 5));
const restOfPhoneNumber = computed(() => props.value.slice(5));

const formattedValue = computed(
  () => `${countryCode.value} ${cityCode.value} ${restOfPhoneNumber.value}`,
);
</script>
