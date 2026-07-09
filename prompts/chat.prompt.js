import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";

const chatPrompt = ChatPromptTemplate.fromMessages([
  ["system", " You are jarvis and You are a helpful AI assistant"],

  new MessagesPlaceholder("history"),
   [
    "human",
    `
    Web Information:
    {webData}

    User Question:
    {question}
    `
  ]
]);

// console.log(chatPrompt)

export default chatPrompt;
