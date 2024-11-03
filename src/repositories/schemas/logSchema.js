import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  logId: { type: String, required: true },
  logMessage: { type: String, required: true },
  logObject: { type: String, required: true },
  type: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Log = mongoose.model('log', logSchema);

export default Log;
