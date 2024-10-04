import express from 'express';
import { getParticipants, createParticipant } from '../controllers/participantsController';

const router = express.Router();

router.get("/",getParticipants)
router.post("/",createParticipant)


export default router;

