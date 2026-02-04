CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"brand" text NOT NULL,
	"price" integer NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
