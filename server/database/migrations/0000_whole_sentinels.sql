CREATE TABLE IF NOT EXISTS "employees" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"phone" varchar(100),
	"address" text,
	CONSTRAINT "employees_name_unique" UNIQUE("name")
);
