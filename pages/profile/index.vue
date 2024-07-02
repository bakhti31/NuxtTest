<template>
  <div>
    <p>Profile Page</p>
    <PrimeCard>
      <PrimeImage src="" alt=""/>
      
    </PrimeCard>
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