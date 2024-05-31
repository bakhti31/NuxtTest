import { serial,varchar,pgSchema, text, pgTable} from 'drizzle-orm/pg-core'
// import { type InferSelectModel,type InferInsertModel } from 'drizzle-orm'
// import { createInsertSchema } from 'drizzle-zod'
// import { z } from 'zod'

export const hr = pgSchema("hr")

export const employees = hr.table("employees",{
    id: serial("id").primaryKey(),
    name: varchar("name",{ length: 50}).unique().notNull(),
    phone: varchar('phone',{length:100}),
    address: text('address'),
})

// export const insertEmployeesSchema = createInsertSchema(employees);

// export type Employees = InferSelectModel<typeof employees>;
// export type NewEmployees = z.infer<typeof insertEmployeesSchema>;