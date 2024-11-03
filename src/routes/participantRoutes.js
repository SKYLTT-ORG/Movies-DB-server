import express from "express";
import {
  getParticipants,
  createParticipant,
  getParticipantDetails,
  updateParticipant,
  deleteParticipant,
} from "../controllers/participantsController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";
import { checkPermission } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/", getParticipants);
router.get("/:id", getParticipantDetails);
router.post("/", authMiddleware, checkPermission('create'),createParticipant);
router.put("/:id", authMiddleware, checkPermission('update'),updateParticipant);
router.delete("/:id", authMiddleware, checkPermission('delete'),deleteParticipant);

export default router;
