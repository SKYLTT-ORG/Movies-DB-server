import express from 'express';
import { getParticipants, createParticipant, getParticipant, updateParticipant, deleteParticipant } from '../controllers/participantsController.js';

const router = express.Router();

router.get("/",getParticipants)
router.post("/",createParticipant)
router.get("/:id",getParticipant)
router.put("/:id",updateParticipant)
router.delete("/:id", deleteParticipant)



export default router;

