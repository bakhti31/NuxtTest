export default defineEventHandler(async (event) => {
  // return 'Hello Nitro'
  const authorization = getRequestHeader(event, 'Authorization')

  if(authorization){
    event.context.authorization = true
  }else{
    event.context.authorization = false

    if(event.path == '/api/login' as any && event.method == 'POST'){
      console.log("login")
      return ;
    }else if(getRequestURL(event).pathname.includes('/api/') === true){
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
      })
    }else {
      return ;
    }
    // return false;
    
    
  }
})
