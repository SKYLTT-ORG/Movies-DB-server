import amqp from "amqplib";
import { LOG_QUEUE } from "../constant.js";
import dotenv from "dotenv";
dotenv.config()

let channel = null;


const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URI);
    channel = await connection.createChannel();
    await channel.assertQueue(LOG_QUEUE)
    console.log("successfully connected to rabbitMQ");

  } catch (error) {
    console.log("failed to connect to rabbitMQ");
  }
};


export {connectRabbitMQ, channel};