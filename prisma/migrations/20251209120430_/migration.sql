/*
  Warnings:

  - You are about to drop the `AdminData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."AdminData";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "c_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "phone" TEXT NOT NULL,
    "joiningDate" TEXT NOT NULL,
    "performanceRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "taskAssigned" INTEGER NOT NULL DEFAULT 0,
    "taskCompleted" INTEGER NOT NULL DEFAULT 0,
    "projectCompleted" INTEGER NOT NULL DEFAULT 0,
    "yearsOfExperience" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_c_name_key" ON "Users"("c_name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
