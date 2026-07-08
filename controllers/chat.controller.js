import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import llm from "../config/groq.js";
import chatPrompt from "../prompts/chat.prompt.js";

export const chatController = async (req, res) => {
  try {
    const { chat_input } = req.body;

    const chain = chatPrompt.pipe(llm);
    const response = await chain.invoke({
        question: chat_input,
        name:"jarvis",
        role:"coading"
    });

    res.status(200).json({ response: response.content });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
};
