<template>
  <div>
    <Button
      type="button"
      aria-haspopup="true"
      aria-controls="theme-menu"
      @click="toggle"
    >
      {{ buttonText }}
    </Button>

    <PMenu ref="menuRef" :model="items" :popup="true" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { MenuItem } from "primevue/menuitem/MenuItem";
import PMenu from "primevue/menu";
import Button from "@/ui/button";

interface DropdownProps {
  buttonText?: string;
  items: MenuItem[];
}

withDefaults(defineProps<DropdownProps>(), {
  buttonText: "Select",
  items: () => [],
});

const menuRef = ref<InstanceType<typeof PMenu> | null>(null);

const toggle = (event: MouseEvent) => {
  menuRef?.value?.toggle(event);
};
</script>
