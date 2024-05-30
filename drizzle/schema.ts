import { pgTable, pgSchema, unique, serial, varchar } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const hr = pgSchema("hr");


export const usersInHr = hr.table("users", {
	id: serial("id").primaryKey().notNull(),
	username: varchar("username", { length: 50 }).notNull(),
},
(table) => {
	return {
		users_username_unique: unique("users_username_unique").on(table.username),
	}
});