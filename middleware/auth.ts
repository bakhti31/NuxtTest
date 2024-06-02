export default defineNuxtRouteMiddleware(async (to: any, from: any) => {
    if(to.path != '/login' && await isAuthenticated() === false){
        return navigateTo('/login')
    }
})
async function isAuthenticated():Promise<boolean> {
    var cookie = useCookie('auth');
    const body= await $fetch('/api/login', {
        method: 'POST',
        body: {
          username: cookie.value
        }
      })
    // console.log(body);
    if(body){ return true }
    return false;
    // throw new Error("Function not implemented.")
}

