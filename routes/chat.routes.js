import express from "express"
import { chatController } from "../controllers/chat.controller.js"

const chatrouter = express.Router()

chatrouter.post("/chat",chatController)




export default chatrouter