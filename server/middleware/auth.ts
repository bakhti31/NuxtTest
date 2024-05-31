export default defineEventHandler(async (event) => {
  // return 'Hello Nitro'
  const authorization = getRequestHeader(event, 'Authorization')

  if(authorization){
    event.context.authorization = true
  }else{
    event.context.authorization = false
    if(getRequestURL(event).pathname != '/api/**' as any){
      return ;
    }else if(event.path != '/api/login' as any && event.method == 'POST'){
      return ;
    }
    // return navigateTo('/login');
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }
})
