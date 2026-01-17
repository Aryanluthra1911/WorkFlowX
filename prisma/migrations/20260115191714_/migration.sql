/*
  Warnings:

  - You are about to drop the column `completedtasks` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `totaltasks` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "completedtasks",
DROP COLUMN "totaltasks";
