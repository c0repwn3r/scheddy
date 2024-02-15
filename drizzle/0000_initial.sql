CREATE TABLE IF NOT EXISTS "availabilities" (
	"id" serial PRIMARY KEY NOT NULL,
	"personId" integer,
	"from" integer,
	"to" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "people" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"scheduleId" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "schedules" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"from" integer,
	"to" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "shifts" (
	"id" serial PRIMARY KEY NOT NULL,
	"scheduleId" integer,
	"personId" integer,
	"starts" integer,
	"ends" integer,
	"shiftType" varchar(256)
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "name_idx" ON "schedules" ("name");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "availabilities" ADD CONSTRAINT "availabilities_personId_people_id_fk" FOREIGN KEY ("personId") REFERENCES "people"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "people" ADD CONSTRAINT "people_scheduleId_schedules_id_fk" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "shifts" ADD CONSTRAINT "shifts_scheduleId_schedules_id_fk" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "shifts" ADD CONSTRAINT "shifts_personId_people_id_fk" FOREIGN KEY ("personId") REFERENCES "people"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
