CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	"passwordHash" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
