<template>
  <div>
    <p>Login Page</p>
    <PrimeInputText type="text" v-model="username"/>
    <PrimeInputText type="password" v-model="password"/>
    <PrimeButton label="Login" @click="login"/>
  </div>
</template>

<script>
export default{
  data(){
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login(){
      // var cookie = useCookie('auth');
      // cookie.value = this.username+','+this.password;
      const body= await $fetch('/api/login', {
        method: 'POST',
        body: {
          username: this.username,
          password: this.password
        }
      })
      // console.log(body);
      if(body){
        this.$router.push('/profile')
      }
    }
  }
}
</script>

<style>

</style>