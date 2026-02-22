-- DropForeignKey
ALTER TABLE "AiMessage" DROP CONSTRAINT "AiMessage_conversationId_fkey";

-- AddForeignKey
ALTER TABLE "AiMessage" ADD CONSTRAINT "AiMessage_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
