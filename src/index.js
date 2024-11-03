import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { DB_NAME } from "./constant.js";
import connect from "./config/db.js";
import { connectRabbitMQ } from "./config/rabbitMQ.js";

// routes list start
import participants from "./routes/participantRoutes.js";
import movie from "./routes/moviesRoutes.js";
import user from "./routes/userRoutes.js";
// routes end

import uid from "tiny-uid";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome to server");
  console.log(req.ip);
});

// middle for routes
app.use("/participants", participants);
app.use("/movie", movie);
app.use("/auth", user);

// logger middleware

app.use((req, res, next) => {
  req.logId = uid(7);
  next();
});

await connect(DB_NAME);
await connectRabbitMQ();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`app is running at port ${PORT}`);
});
