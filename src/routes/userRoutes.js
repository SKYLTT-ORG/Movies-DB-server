import { login, registration } from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.post("/register", registration);
router.post("login", login);

export default router;