import { ChatPromptTemplate } from "@langchain/core/prompts";

const chatPrompt= ChatPromptTemplate.fromMessages([
    [
        "system",
         `You are an assistant.
          Extract the user's profile from the question.`
    ],
    [

         "human",
        "{question}"
    ]
])

export default chatPrompt;