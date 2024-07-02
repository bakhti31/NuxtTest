import { employees } from "./employee/schema";
import { eq, db } from "../util/drizzle";

export default defineEventHandler(async (event) => {
  // const body = JSON.parse(await readBody(event)); // Kalau dari Bentuk json
  const body = await readBody(event); 
  const username = body.username;
  console.log(username)
  if (username){
    const [data] = await db.select().from(employees).where(eq(employees.name,username));
    if(!data) return false;
    setCookie(event,'auth',data.name);
    return data;
  }
  return false;
  // if(body.username == 'admin' && body.password == 'admin'){
  //   setCookie(event, 'auth', 'true')
  //   return true;
  // }
  // return false;
})
