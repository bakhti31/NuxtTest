// import db from "~/server/libs/db";

import { tables, useDrizzle } from "~/server/util/drizzle"

// import { employees } from "~/server/database/schema/employee/schema";
// import { tables, useDrizzle } from "~/sever/util/drizzle"

// import { users } from "~/server/modules/employee/schema";
// export default defineEventHandler(async (event) => {
  // return 'Hello Nitro'
  // return await useDrizzle().select().from(employees);
  // return await useDrizzle().select().from(tables.employees);
  // const db = hubDatabase();
  // const stmt = db.prepare('SELECT * FROM employees').all()
  // return stmt
// })
export default eventHandler(async () => {
  const test = await useDrizzle().select().from(tables.employees).all()
  return  test})