<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.statusMessage }}</p>
    <p>Data: {{ error.data }}</p>
    <pre>{{ error.fatal }}</pre>
    <NuxtLink to='/'>Go back Home</NuxtLink>
  </div>
</template>
<style>
</style>

<script setup lang="ts">
// @ts-ignore: error Declaration
import type { NuxtError } from '#app';
const props = defineProps({
    error: Object as () => NuxtError,
});
</script>