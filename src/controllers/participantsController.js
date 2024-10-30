import {
  getAllParticipants,
  createParticipantByName,
  getSingleParticipantById,
  updateParticipantById,
  deleteParticipantById,
} from "../services/participantsService.js";

import {
  storeInCache,
  fetchFromCache,
  invalidateCache,
} from "../lib/redisHelper.js";

const REDIS_KEY = "participants";
const REDIS_CACHE = 3600;
 
export const getParticipants = async (req, res) => {
  const resultFromCache = await fetchFromCache(REDIS_KEY);
  if (resultFromCache) {
    res.status(200).json(resultFromCache);
    return;
  }
  const result = await getAllParticipants();
  await storeInCache(REDIS_KEY, result, REDIS_CACHE);
  res.status(200).json(result);
};

export const getParticipant = async (req, res) => {
  const id = req?.params?.id ?? "";
  const resultFromCache = await fetchFromCache(REDIS_KEY);
  if (resultFromCache) {
    res.status(200).json(resultFromCache);
    return;
  }
  const result = await getSingleParticipantById(id);
  await storeInCache(REDIS_KEY, result, REDIS_CACHE);

  if (!result) {
    res.status(404).json({ message: "Participant not found" });
    return;
  }
  res.status(200).json(result);
};

export const createParticipant = async (req, res) => {
  const { name, age, role } = req.body;
  await invalidateCache(REDIS_KEY);
  const result = await createParticipantByName(name, age, role);
  res.status(201).json(result);
};

export const updateParticipant = async (req, res) => {
  const id = req?.params?.id ?? "";

  const { name, age, role } = req.body;

  const result = await updateParticipantById(id, name, age, role);
  await invalidateCache(REDIS_KEY);
  if (!result) {
    res.status(404).json({ message: "Participant not found" });
    return;
  }
  res.status(200).json(result);
};

export const deleteParticipant = async (req, res) => {
  const id = req?.params?.id ?? "";
  const result = await deleteParticipantById(id);
  await invalidateCache(REDIS_KEY);
  if (!result) {
    res.status(404).json({ message: "Participant not found" });
    return;
  }

  res.status(204).json();
};
