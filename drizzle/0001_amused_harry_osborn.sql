/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'recipes'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "recipes" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "recipes" ALTER COLUMN "id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "recipes" ALTER COLUMN "servings" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "recipes" ALTER COLUMN "ingredients" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "recipes" ALTER COLUMN "instructions" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "recipes" ADD COLUMN "key_id" serial PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "recipes" ADD COLUMN "creator" text DEFAULT 'Unknown';--> statement-breakpoint
ALTER TABLE "recipes" ADD COLUMN "category" text NOT NULL;