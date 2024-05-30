import { serial,varchar,integer,pgSchema, text } from 'drizzle-orm/pg-core'
import { type InferSelectModel,type InferInsertModel } from 'drizzle-orm'
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'

export const hr = pgSchema("hr")
export const users = hr.table("employees",{
    id: serial("id").primaryKey(),
    name: varchar("name",{ length: 50}).unique().notNull(),
    phone: varchar('phone',{length:100}),
    address: text('address'),
})

export const insertUsersSchema = createInsertSchema(users);

export type Users = InferSelectModel<typeof users>;
export type NewUsers = z.infer<typeof insertUsersSchema>;