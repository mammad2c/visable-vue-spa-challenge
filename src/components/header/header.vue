<template>
  <header
    id="main-header"
    class="flex items-center bg-midnight bg-primary py-8 text-primary-color-text"
  >
    <Container fluid>
      <Row class="items-center">
        <Col cols="6">
          <h1 class="text-5xl">Restaurant finder</h1>
        </Col>
        <Col class="flex justify-end" cols="6">
          <ThemeChanger />
        </Col>
      </Row>
    </Container>
  </header>
</template>

<script setup lang="ts">
import ThemeChanger from "../theme-changer";
import Container from "@/ui/container";
import Row from "@/ui/row";
import Col from "@/ui/col";
</script>
