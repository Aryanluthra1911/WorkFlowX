/*
  Warnings:

  - You are about to drop the column `tasks` on the `Project` table. All the data in the column will be lost.
  - Added the required column `projectId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "tasks",
ADD COLUMN     "completedtasks" INTEGER,
ADD COLUMN     "totaltasks" INTEGER;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
