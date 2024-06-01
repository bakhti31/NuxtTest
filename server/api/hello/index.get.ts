import { tables, useDrizzle } from "~/server/util/drizzle"
export default eventHandler(async () => {
  const test = await useDrizzle().select().from(tables.employeesInHr);
  return  test
})