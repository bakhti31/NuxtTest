<template>
  <div>
    Logout
  </div>
</template>

<script lang="ts" setup>
const cookie = useCookie('auth');
cookie.value = null;

</script>

<style>

</style>