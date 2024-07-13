-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "writerId" INTEGER NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_writerId_fkey" FOREIGN KEY ("writerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
