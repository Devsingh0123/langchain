import { ChatPromptTemplate } from "@langchain/core/prompts";

const chatPrompt= ChatPromptTemplate.fromMessages([
    [
        "system",
         " Yoy are {name} and You are a helpful {role} tutor."
    ],
    [

         "human",
        "{question}"
    ]
])

export default chatPrompt;