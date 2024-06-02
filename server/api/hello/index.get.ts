import { employees } from "~/server/database/schema/employee/schema";
import { db } from "~/server/util/drizzle"
export default eventHandler(async () => {
  const test = await db.select().from(employees);
  return  test
})