import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect:  "postgresql",
  schema:   "./server/api/**/schema.ts",
  out:      "./server/database/migrations",
  dbCredentials: {
    url:      process.env.DATABASEURL as string, 
  },
  schemaFilter: ["hr","public","static"],
});
