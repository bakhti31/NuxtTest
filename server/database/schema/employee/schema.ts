// import { serial,varchar,pgSchema, text, pgTable} from 'drizzle-orm/pg-core'
// // import { type InferSelectModel,type InferInsertModel } from 'drizzle-orm'
// // import { createInsertSchema } from 'drizzle-zod'
// // import { z } from 'zod'

// export const hr = pgSchema("hr")

// export const employees = hr.table("employees",{
//     id: serial("id").primaryKey(),
//     name: varchar("name",{ length: 50}).unique().notNull(),
//     phone: varchar('phone',{length:100}),
//     address: text('address'),
// })

// // export const insertEmployeesSchema = createInsertSchema(employees);

// // export type Employees = InferSelectModel<typeof employees>;
// // export type NewEmployees = z.infer<typeof insertEmployeesSchema>;
import { pgTable, pgSchema, serial, varchar, text } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const hr = pgSchema("hr");

export const employeesInHr = hr.table("employees", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 50 }).notNull(),
  phone: varchar("phone", { length: 100 }),
  address: text("address"),
});
