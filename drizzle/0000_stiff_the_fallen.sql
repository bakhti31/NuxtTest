-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE SCHEMA "hr";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hr"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(50) NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);

*/