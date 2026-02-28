-- CreateTable
CREATE TABLE "_ProjectToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjectToUsers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectToUsers_B_index" ON "_ProjectToUsers"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToUsers" ADD CONSTRAINT "_ProjectToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToUsers" ADD CONSTRAINT "_ProjectToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
