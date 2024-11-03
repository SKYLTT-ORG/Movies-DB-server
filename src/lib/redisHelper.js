import redisClient from "../config/redis.js";
import { logMgs } from "./logProducer.js";

export const fetchFromCache = async (key) => {
  const cachedData = await redisClient.get(key);
  return JSON.parse(cachedData);
};

export const storeInCache = async (key, data, cacheDuration) => {
  await redisClient.set(key, cacheDuration, JSON.stringify(data));
  return;
};

export const invalidateCache = async (key, logId) => {
  logMgs(logId, `invalidating redis key: ${key}`, {})
  await redisClient.del(key);
};
