
import llm from "../config/groq.js";
import chatPrompt from "../prompts/chat.prompt.js";

import profileSchema from "../schemas/profile.schema.js";

export const chatController = async (req, res) => {
  try {
    const { chat_input } = req.body;
    const structuredLLM = llm.withStructuredOutput(profileSchema);

    const chain = chatPrompt
    .pipe(structuredLLM)
    
    const response = await chain.invoke({
        question: chat_input,
        
    });

    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
