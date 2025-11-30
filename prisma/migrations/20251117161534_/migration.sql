/*
  Warnings:

  - You are about to drop the `companys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."companys";

-- CreateTable
CREATE TABLE "UserData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "c_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);
