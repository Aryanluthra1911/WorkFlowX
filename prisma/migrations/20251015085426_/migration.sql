-- CreateTable
CREATE TABLE "organisation" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "projects" JSONB NOT NULL,

    CONSTRAINT "organisation_pkey" PRIMARY KEY ("id")
);
