import { deleteEmployee, getEmployeesById, updateEmployee } from "../service";

export default defineEventHandler(async (event) => {
  if (event.method === "GET"){
    const id = event.context.params;
    return await getEmployeesById(id);
  }else
  if (event.method === "PUT"){
    const id = event.context.params;
    const body = await readBody(event);
    return await updateEmployee(id, body);
  }else
  if (event.method === "DELETE"){ 
    const id = event.context.params;
    const body  = await readBody(event);
    return deleteEmployee(id?.id as unknown as number);
  }
})
