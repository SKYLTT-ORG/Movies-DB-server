import mongoose from "mongoose";
import Participants from "../repositories/schemas/participantsSchema.js";

export const getAllParticipants = async () => {
  const result = await Participants.find();
  if (!result) {
    return [];
  }
  return result;
};

export const getSingleParticipantById = async(id)=>{
  if(!mongoose.Types.ObjectId.isValid(id)){
    return null;
  }
  const result = await Participants.findById(id);
  if(!result){
    return null
  }
  return participant
}


export const createParticipantByName = async( name, age, role) =>{
    const newParticipant = new Participants({name, age, role});
    const result = await newParticipant.save();
    return result;
}

export const updateParticipantById = async(id, name, age, role) =>{
  if(!mongoose.Types.ObjectId.isValid(id)){
    return null
  }

  const result = await findByIdAndUpdate(id, {name, age, role}, {new:true});
  if(!result){
    return []
  }
  return result

}


export const deleteParticipantById = async(id) =>{
  if(!mongoose.Types.ObjectId.isValid(id)){
    return null
  }
  const result = await participant.findByIdAndDelete(id);
  if(!result){
    return false
  }
  return true

}
