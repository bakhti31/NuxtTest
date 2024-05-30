import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect:  "postgresql",
  schema:   "./server/modules/**/schema.ts",
  out:      "./drizzle",
  dbCredentials: {
    // connectionString: process.env.DATABASE_URL,
    url:      "postgres://postgres:psql@localhost:5432/jir",
    host:     "localhost",
    user:     "postgres",
    password: "psql",
    database: "jir",
    port:     5432,
    
  },
  schemaFilter: ["public", "hr", "statis"],
});
