import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";


const chatHistories = new Map();

export function getChatHistory(sessionId) {
  if (!chatHistories.has(sessionId)) {
    chatHistories.set(sessionId, new InMemoryChatMessageHistory());
  }

  return chatHistories.get(sessionId);
}