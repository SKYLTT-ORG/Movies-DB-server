import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovieDetails,
  getMovieList,
  updateMovie,
} from "../controllers/movieController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { checkPermission } from "../middlewares/roleMiddleware.js";

import { body } from "express-validator";
import { rateLimit } from "express-rate-limit";

const router = express.Router();

router.get("/", rateLimit, getMovieList);
router.get("/:id", rateLimit, getMovieDetails);
router.post(
  "/add-movie",
  authMiddleware,
  checkPermission("create"),
  createMovie
);
router.put("/:id", authMiddleware, checkPermission("update"), updateMovie);
router.delete("/:id", authMiddleware, checkPermission("delete"), deleteMovie);

export default router;
