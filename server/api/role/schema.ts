import { pgTable, pgSchema, serial, varchar, text } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const schemas = pgSchema("role");

export const role = schemas.enum('role',['hr','admin','customer','employee']);



// export const employeesInHr = hr.table("employees", {
//   id: serial("id").primaryKey().notNull(),
//   name: varchar("name", { length: 50 }).notNull(),
//   phone: varchar("phone", { length: 100 }),
//   address: text("address"),
// });

export const rolesInHr = schemas.table("roles", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 50 }).notNull(),
});