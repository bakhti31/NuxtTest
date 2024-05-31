<template>
  <div>
    <p>Profile Page</p>
  </div>
</template>

<script>
  export default{
    beforeMount(){
      definePageMeta({
        middleware: 'auth',
      })     
    }
  }
  
</script>

<style>

</style>