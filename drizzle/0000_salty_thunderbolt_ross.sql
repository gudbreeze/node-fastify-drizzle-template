CREATE TABLE "examples" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "examples_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
