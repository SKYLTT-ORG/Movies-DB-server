import mongoose from "mongoose";
import Participants from "../repositories/schemas/participantsSchema.js";
import { logMgs } from "../lib/logProducer.js";

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
  return result
}


export const createParticipantByName = async( name, age, role, logId) =>{
  logMgs(logId, "creating participant in the repository", {name, age, role} )
    const newParticipant = new Participants({name, age, role});
    const result = await newParticipant.save();
    logMgs(logId, "successfully participant in the repository", result)
    return result;
}

export const updateParticipantById = async(id, name, age, role, logId) =>{
  logMgs(logId, "updating participant in the repository", {name, age, role} )
  if(!mongoose.Types.ObjectId.isValid(id)){
    return null
  }

  const result = await findByIdAndUpdate(id, {name, age, role}, {new:true});
  if(!result){
    return []
  }
  logMgs(logId, "updating participant in the repository", result)

  return result

}


export const deleteParticipantById = async(id, logId) =>{
  if(!mongoose.Types.ObjectId.isValid(id)){
    return null
  }
  const result = await Participants.findByIdAndDelete(id);
  if(!result){
    return false
  }
  return true

}
