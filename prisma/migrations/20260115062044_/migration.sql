/*
  Warnings:

  - Added the required column `companyName` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "companyName" TEXT NOT NULL;
