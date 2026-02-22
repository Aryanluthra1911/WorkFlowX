-- CreateEnum
CREATE TYPE "ChatType" AS ENUM ('AI', 'User');

-- CreateTable
CREATE TABLE "Aichats" (
    "id" SERIAL NOT NULL,
    "type" "ChatType" NOT NULL,
    "message" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Aichats_pkey" PRIMARY KEY ("id")
);
