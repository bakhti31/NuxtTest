export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if(body.username == 'admin' && body.password == 'admin'){
    setCookie(event, 'auth', 'true')
    return true;
  }
  return false;
})
