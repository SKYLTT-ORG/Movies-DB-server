import { getAllParticipants, createParticipantByName } from "../services/participantsService.js";

export const getParticipants = async(req, res) =>{
    const result = await getAllParticipants();
    res.status(200).json(result);
}

export const createParticipant = async(req, res) =>{
    const { name, age, role} = req.body;

    const result = await createParticipantByName(name, age, role);
    res.status(201).json(result)
}