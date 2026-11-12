CREATE TABLE "rooms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" varchar(100) NOT NULL,
	"capacity" integer NOT NULL,
	"floor" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "rooms_floor_name_unique" UNIQUE("floor","name"),
	CONSTRAINT "capacity_positive" CHECK ("capacity" > 0)
);
