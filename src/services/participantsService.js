import mongoose from "mongoose";
import Participants from "../repositories/schemas/participantsSchema.js";

export const getAllParticipants = async () => {
  const result = await Participants.find();
  if (!result) {
    return [];
  }
  return result;
};


export const createParticipantByName = async( name, age, role) =>{
    const newParticipant = new Participants({name, age, role});
    const result = await newParticipant.save();
    return result;
}