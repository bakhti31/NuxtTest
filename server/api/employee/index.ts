import { createEmployee, getEmployees } from "./service";

export default defineEventHandler(async (event) => {
    
  if (event.method === "GET"){
    return await getEmployees();
  }else 
  if(event.method === "POST"){
    const body = await readBody(event);
    return await createEmployee(body);
  }
})

