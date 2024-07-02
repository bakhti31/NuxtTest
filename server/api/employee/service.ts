import { db, eq } from "~/server/util/drizzle";
import { employees } from "./schema";

export const getEmployees = async () => {
  return await db.select().from(employees);
}

export const getEmployeesById = async (id: any) => {
  return await db.select().from(employees).where(eq(employees.id, id));
}

export const createEmployee = async (body: any, tx = db) => {
  const data = await tx.transaction(async (trx) => {
    const [check] = await trx.select().from(employees).where(eq(employees.name, body.name));
    if (check) {
      throw new Error("Employee already exists");
    }
    const [data] = await trx.insert(employees).values(body).returning();
    return data;
  })
  return data;
}

export const updateEmployee = async (id: any, body: any, tx = db) => {
  // const data = await tx.transaction(async (trx) => {
  //   const [check] = await trx.select().from(employees).where(eq(employees.id, id));
  //   if (!check) {
  //     throw new Error("Employee not found");
  //   }
  //   const [data] = await trx.update(employees).set(body).where(eq(employees.id, id)).returning();
  //   return data;
  // })
  // return data;
  const data = await db.update(employees).set(body).where(eq(employees.id, id)).returning();
  return data[0];
} 


export const deleteEmployee = async (id: number, tx = db) => {
  console.log(id);
  try{
    const [data] = await tx.delete(employees).where(eq(employees.id, id)).returning();
    return data;
  }catch(error){
    throw new Error("Employee not found");
  }
}