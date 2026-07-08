
import { HumanMessage } from "@langchain/core/messages"
import llm from "../config/groq.js";


export const chatController = async (req, res)=>{

    try {

          const {chat_input} = req.body;
    console.log(chat_input)
    const response =await llm.invoke([
        new HumanMessage(chat_input)
    ])

    console.log(response.content)

    res.json({response:response.content})
        
    } catch (error) {
        console.log(err)
        res.status(500).json({message:"something went wrong"})
    }

  

}