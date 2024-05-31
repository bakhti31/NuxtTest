<template>
  <PrimeMenubar :model="items"/>
  <slot/>
</template>

<script lang="ts">
export default{
  data(){
    const cookie = useCookie('auth');
    var menu = [
        {label: 'Home', url: '/'},
        {label: 'About', url: '/about/'},
        {label: 'Profile', url: '/profile/'},
    ];
    if (cookie.value != null){
      menu.push({label: 'Logout', url: '/logout/'});
    }else{
      menu.push({label: 'Login', url: '/login/'});
    }
    return {
      items:menu,
      visible: false,
    }
  },
}
</script>

<style>
.p-menubar .p-menubar-root-list {
  display: flex; /* Enable flexbox layout */
  justify-content: space-between; /* Distribute items evenly */
  align-items: center; /* Align items vertically */
}
</style>