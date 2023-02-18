<template>
  <div>
    <Row class="mb-10">
      <Col cols="9">
        <SkeletonLoading class="mb-6" width="25%" />
        <SkeletonLoading class="mb-6" width="15%" />
        <SkeletonLoading class="mb-6" width="45%" />
        <SkeletonLoading width="30%" />
      </Col>

      <Col cols="3">
        <SkeletonLoading height="10rem" width="100%" />
      </Col>
    </Row>

    <SkeletonLoading class="mb-6" width="15%" />

    <div class="pl-10">
      <template v-for="i in 3" :key="i">
        <SkeletonLoading class="mb-6" width="10%" />
        <SkeletonLoading class="mb-6" width="100%" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Col } from "@/ui/col";
import { Row } from "@/ui/row";
import { SkeletonLoading } from "@/ui/skeleton-loading";
</script>
