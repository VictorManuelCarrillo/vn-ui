<template>
  <h2>colors</h2>
  <NvButton color="primary">button primary</NvButton>
  <NvButton color="secondary">button secondary</NvButton>
  <NvButton color="success">button success</NvButton>
  <NvButton color="warning">button warning</NvButton>
  <NvButton color="info">button info</NvButton>
  <NvButton color="error">button error</NvButton>
  <h2>size</h2>
  <NvButton size="sm">button sm</NvButton>
  <NvButton size="md">button md</NvButton>
  <NvButton size="lg">button lg</NvButton>
  <h2>shape</h2>
  <NvButton shape="normal">button normal</NvButton>
  <NvButton shape="rounded">button rounded</NvButton>
  <NvButton shape="pill" disabled>button pill</NvButton>
  <h2>ola</h2>
  <NvButton gradient color="error">Mono Gradiente Default</NvButton>
<NvButton gradient="green-lime">Colorful Gradient</NvButton>
  <slot />
</template>
<script setup lang="ts">
import NvButton from '~/ui/components/inputs/button/vn-button.vue'
</script>