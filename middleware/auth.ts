export default defineNuxtRouteMiddleware((to: any, from: any) => {
    if(to.path != '/login' && isAuthenticated() === false){
        return navigateTo('/login')
    }    
})
function isAuthenticated():boolean {
    var cookie = useCookie('auth');
    if(cookie.value){ return true }
    return false;
    // throw new Error("Function not implemented.")
}

