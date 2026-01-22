CREATE TABLE "recipes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"servings" text,
	"ingredients" text[] NOT NULL,
	"instructions" text[] NOT NULL,
	"tags" text[],
	"nutrition" text,
	"time" integer
);
