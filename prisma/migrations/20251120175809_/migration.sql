/*
  Warnings:

  - A unique constraint covering the columns `[c_name]` on the table `UserData` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."UserData_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "UserData_c_name_key" ON "UserData"("c_name");
