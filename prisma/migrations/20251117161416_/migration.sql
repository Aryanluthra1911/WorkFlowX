-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Admin', 'Manager', 'Member');

-- CreateTable
CREATE TABLE "companys" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "c_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "companys_pkey" PRIMARY KEY ("id")
);
