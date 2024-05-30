import { serial,varchar,integer,pgSchema } from 'drizzle-orm/pg-core'
import { type InferSelectModel,type InferInsertModel } from 'drizzle-orm'
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'

export const hr = pgSchema("hr")
export const users = hr.table("roles",{
    id: serial("id").primaryKey(),
    name: varchar("name",{ length: 50}).unique().notNull(),
})

export const insertUsersSchema = createInsertSchema(users)

export type Users = InferSelectModel<typeof users>
export type NewUsers = z.infer<typeof insertUsersSchema>