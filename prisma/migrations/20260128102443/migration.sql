/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Conversation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Conversation_email_key" ON "Conversation"("email");
