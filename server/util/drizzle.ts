import { drizzle } from 'drizzle-orm/d1'
export { sql, eq, and, or } from 'drizzle-orm'
import { Logger } from 'drizzle-orm'
import * as schema from '../database/schema/employee/schema'

export const tables = schema

class cusLog implements Logger{
  logQuery(query: string, params: unknown[]): void {
      console.log('\n Query: ',query,params);
  }
}

export function useDrizzle() {
  return drizzle(hubDatabase(), { logger: new cusLog, schema })
}

export type Employees = typeof schema.employees.$inferSelect
