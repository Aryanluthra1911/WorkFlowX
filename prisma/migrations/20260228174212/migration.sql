/*
  Warnings:

  - You are about to drop the `_ProjectToUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProjectToUsers" DROP CONSTRAINT "_ProjectToUsers_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToUsers" DROP CONSTRAINT "_ProjectToUsers_B_fkey";

-- DropTable
DROP TABLE "_ProjectToUsers";
