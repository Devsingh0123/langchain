import express from "express"
import dotenv from "dotenv"
import chatrouter from "./routes/chat.routes.js"
dotenv.config()


const app = express()
const PORT = process.env.PORT || 6000


app.use(express.json());


app.use("/api", chatrouter)

app.get("/",(req,res)=>{

    res.send({message:"welcome"})
})









app.listen(PORT,()=>{
    console.log(`app started on ${PORT}`)
})