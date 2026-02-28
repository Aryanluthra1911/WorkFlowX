/*
  Warnings:

  - You are about to drop the column `organisation` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `organisation` table. All the data in the column will be lost.
  - You are about to drop the column `projects` on the `organisation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[companyName]` on the table `organisation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `orgId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "organisation",
ADD COLUMN     "orgId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "organisation" DROP COLUMN "category",
DROP COLUMN "projects";

-- CreateIndex
CREATE UNIQUE INDEX "organisation_companyName_key" ON "organisation"("companyName");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "organisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
