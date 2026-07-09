import llm from "../config/groq.js";
import { getChatHistory } from "../memory/chatHistory.js";
import chatPrompt from "../prompts/chat.prompt.js";

import profileSchema from "../schemas/profile.schema.js";
import tool from "../tools/tavily.tool.js";

export function shouldSearch(query) {
  const keywords = [
    "latest",
    "current",
    "today",
    "now",
    "news",
    "recent",
    "price",
    "weather",
    "score",
    "update",
  ];

  return keywords.some((keyword) => query.toLowerCase().includes(keyword));
}

export const chatController = async (req, res) => {
  try {
    const { sessionId, chat_input } = req.body;
    const history = getChatHistory(sessionId);

    let webData = null;

    if (shouldSearch(chat_input)) {
      webData = await tool.invoke({
        query: chat_input,
      });
    }

 

    console.log("webdata ", webData)

    // console.log("chat history  ", history);
    const messages = await history.getMessages();

    // console.log("messages  ", messages);

    const chain = chatPrompt.pipe(llm);

    const response = await chain.invoke({
      history: messages,
      question: chat_input,
      webData: webData?.results[1]?.content,
    });

    // console.log(response);
    await history.addUserMessage(chat_input);
    await history.addAIMessage(response.content);

    res.status(200).json({ response: response?.content });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
