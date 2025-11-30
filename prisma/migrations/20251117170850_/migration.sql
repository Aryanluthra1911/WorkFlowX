/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `UserData` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserData_email_key" ON "UserData"("email");
