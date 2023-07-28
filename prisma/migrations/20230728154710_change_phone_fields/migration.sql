/*
  Warnings:

  - A unique constraint covering the columns `[phone1]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone2]` on the table `contacts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone1]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone2]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "addedAt" SET DATA TYPE TEXT,
ALTER COLUMN "deletedAt" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "contacts_phone1_key" ON "contacts"("phone1");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_phone2_key" ON "contacts"("phone2");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone1_key" ON "users"("phone1");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone2_key" ON "users"("phone2");
