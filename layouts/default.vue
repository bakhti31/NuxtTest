<template>
<PrimeButton @click="visible=true">Logo</PrimeButton>
<PrimeSidebar v-model:visible="visible" header="Sidebar" position="right">
<PrimeMenubar :model="items">
    <template #start>
      Logo Bar
    </template>

    <template #item="{ item }">
      <NuxtLink v-if="item.target" :to="item.target"> 
        <PrimeButton >{{ item.label }}</PrimeButton>
      </NuxtLink>  
    </template>

  </PrimeMenubar>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit nemo voluptates ullam obcaecati eius quidem, vero aut quae itaque eligendi perspiciatis quod fuga architecto rem ad, dolore tempora accusantium?</p>
  </PrimeSidebar>
  <slot/>
</template>

<script lang="ts">
// import { PrimeSidebar } from '#build/components';

// import Menubar from 'primevue/menubar';
export default{
  // name : "appMenu",
  data(){
    return {
      items:[
        {label: 'Test Pertama', target: '/'},
        {label: 'Kedua Kali', target: '/about'},
        {label: 'Kedua Kali', target: '/about'},
        {label: 'Kedua Kali', target: '/about'},
        {label: 'Kedua Kali', target: '/about'},
        {label: 'Kedua Kali', target: '/about'},
      ],
      visible: false,
    }
  }
}
</script>

<style>
.p-menubar .p-menubar-root-list {
  display: flex; /* Enable flexbox layout */
  justify-content: space-between; /* Distribute items evenly */
  align-items: center; /* Align items vertically */
}
</style>