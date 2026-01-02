/*
  Warnings:

  - Added the required column `yearsOfExperience` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `role` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "yearsOfExperience" INTEGER NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;
