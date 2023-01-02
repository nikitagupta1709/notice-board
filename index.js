import express  from "express";
import cors from 'cors';
import { connection } from "./config/db.js";
import userRouter from "./routes/user.route.js";
import noticeRouter from "./routes/notice.route.js";

const app = express();
app.use(express.json()); 
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to sports channel! ")
})

app.use("/auth", userRouter);
app.use("/notice", noticeRouter);

app.listen(3050, ()=>{
    try{
        connection();
        console.log("Server running on 3050");
    }
    catch(e){
        console.log(e)
    }
})