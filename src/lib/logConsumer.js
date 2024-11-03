import { channel, connectRabbitMQ } from "../config/rabbitMQ.js";

import { LOG_QUEUE, LOG_DB_NAME } from "../constant.js";
import connect from "../config/db.js";
import { createLog } from "../controllers/logController.js";



export const startLogConsumer = async () => {
    await connect(LOG_DB_NAME)
  await connectRabbitMQ();
  channel.consume(LOG_QUEUE, async (msg) => {
    if (msg !== null) {
      const logData = JSON.parse(msg, content.toString());
      createLog(logData);
      channel.ack(msg);
    }
  });
};

startLogConsumer().catch((error) => console.error("failed to consume queue", error));
