import {
  getAllParticipants,
  createParticipantByName,
  getSingleParticipantById,
  updateParticipantById,
  deleteParticipantById,
} from "../services/participantsService.js";

export const getParticipants = async (req, res) => {
  const result = await getAllParticipants();
  res.status(200).json(result);
};

export const getParticipant = async (req, res) => {
  const id = req?.params?.id ?? "";
  const result = await getSingleParticipantById(id);
  if (!result) {
    res.status(404).json({ message: "Participant not found" });
    return;
  }
  res.status(200).json(result);
};

export const createParticipant = async (req, res) => {
  const { name, age, role } = req.body;

  const result = await createParticipantByName(name, age, role);
  res.status(201).json(result);
};

export const updateParticipant = async (req, res) => {
  const id = req?.params?.id ?? "";

  const { name, age, role } = req.body;

  const result = await updateParticipantById(id, name, age, role);
  if (!result) {
    res.status(404).json({ message: "Participant not found" });
    return;
  }
  res.status(200).json(result);
};

export const deleteParticipant = async (req, res) => {
  const id = req?.params?.id ?? "";
  const result = await deleteParticipantById(id);
  if (!result) {
    res.status(404).json({ message: "Participant not found" });
    return;
  }
  res.status(204).json();
};
