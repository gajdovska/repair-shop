ALTER TABLE "customers" ALTER COLUMN "state" SET DATA TYPE varchar(2);--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "city" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "zip" varchar(10) NOT NULL;