import { drizzle } from 'drizzle-orm/postgres-js'
export { sql, eq, and, or } from 'drizzle-orm'
import type { Logger } from 'drizzle-orm'
import postgres from 'postgres'

class cusLog implements Logger{
  logQuery(query: string, params: unknown[]): void {
      console.log('\n Query: ',query,params);
  }
}
const client = postgres(process.env.DATABASEURL as string, { max: 1});

export const db = drizzle(client, { logger: new cusLog})