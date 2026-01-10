/*
  Warnings:

  - Added the required column `projectManager` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "projectManager" TEXT NOT NULL,
ALTER COLUMN "tasks" DROP NOT NULL,
ALTER COLUMN "members" DROP NOT NULL,
ALTER COLUMN "startDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "completionDate" DROP NOT NULL;
