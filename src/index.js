import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { DB_NAME } from "./constant.js";
import connect from "./config/db.js";

// routes list start
import Participants from "./routes/participantRoutes.js";
import movie from "./routes/moviesRoutes.js";
// routes end


dotenv.config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("welcome to server")
    console.log(req.ip)
})

// middle for routes
app.use('/participants', Participants)
app.use('/movie', movie)

await connect(DB_NAME);


const PORT = process.env.PORT || 8000



app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`)
})