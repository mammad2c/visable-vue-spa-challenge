<template>
  <Container fluid no-padding>
    <Row>
      <Col cols="4">
        <RestaurantsList />
      </Col>
    </Row>
  </Container>
</template>

<script setup lang="ts">
import RestaurantsList from "./components/restaurants-list";
import Col from "@/ui/col";
import Row from "@/ui/row";
import Container from "@/ui/container";
</script>
