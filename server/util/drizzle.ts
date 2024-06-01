import { drizzle } from 'drizzle-orm/postgres-js'
export { sql, eq, and, or } from 'drizzle-orm'
import type { Logger } from 'drizzle-orm'
import * as schema from '../database/schema/employee/schema'
import postgres from 'postgres'

export const tables = schema

class cusLog implements Logger{
  logQuery(query: string, params: unknown[]): void {
      console.log('\n Query: ',query,params);
  }
}

export function useDrizzle() {
  const client = postgres(process.env.DATABASEURL as string);
  return drizzle(client, { logger: new cusLog, schema })
}

export type Employees = typeof schema.employeesInHr.$inferSelect
