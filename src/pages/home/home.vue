<template>
  <div class="flex items-center justify-center h-full">
    <Button :to="{ name: 'restaurants' }"> See restaurants </Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "@/ui/button";
</script>
