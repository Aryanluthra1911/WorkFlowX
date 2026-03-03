/*
  Warnings:

  - A unique constraint covering the columns `[organisationName]` on the table `organisation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `organisationName` to the `organisation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "organisation_companyName_key";

-- AlterTable
ALTER TABLE "organisation" ADD COLUMN     "organisationName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "organisation_organisationName_key" ON "organisation"("organisationName");
