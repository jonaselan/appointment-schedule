/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `doctors` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE doctors_id_seq;
ALTER TABLE "doctors" ALTER COLUMN "id" SET DEFAULT nextval('doctors_id_seq');
ALTER SEQUENCE doctors_id_seq OWNED BY "doctors"."id";

-- CreateIndex
CREATE UNIQUE INDEX "doctors_email_key" ON "doctors"("email");
