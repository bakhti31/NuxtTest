<template>
  <div>
    <p>About Page</p>
  </div>
</template>

<script lang="ts">
export default{
    name: "about",
}
definePageMeta({
    // layout:"custom",
    middleware: 'auth'
})
</script>

<style>

</style>