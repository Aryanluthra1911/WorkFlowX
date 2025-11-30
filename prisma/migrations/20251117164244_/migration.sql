/*
  Warnings:

  - You are about to drop the column `category` on the `UserData` table. All the data in the column will be lost.
  - Added the required column `role` to the `UserData` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Manager', 'Member');

-- AlterTable
ALTER TABLE "UserData" DROP COLUMN "category",
ADD COLUMN     "role" "Role" NOT NULL;

-- DropEnum
DROP TYPE "public"."Category";
