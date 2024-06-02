const router = createRouter();
router.post('/',defineEventHandler(async (event)=>{
  return 'Hello Nitro';
}))

router.post('/:id',defineEventHandler(async (event)=>{
  const id = event.context.params;
  const body = await readBody(event);
  return [body,id];
}))

export default useBase('/api/auth/',router.handler)