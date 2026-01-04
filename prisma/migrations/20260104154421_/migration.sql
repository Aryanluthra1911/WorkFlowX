/*
  Warnings:

  - Added the required column `companyName` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "companyName" TEXT NOT NULL,
ALTER COLUMN "completionDate" DROP NOT NULL;
