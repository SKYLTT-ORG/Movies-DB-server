import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovieDetails,
  getMovieList,
  updateMovie,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/", getMovieList);
router.get("/:id", getMovieDetails);
router.post("/add-movie", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id",deleteMovie)

export default router;
