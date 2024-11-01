import mongoose from "mongoose";
import Movie from "../repositories/schemas/movieSchema.js";

export const moviesList = async () => {
  const result = await Movie.find()
    .populate("producer", "-_id -role")
    .populate("director", "-_id -role")
    .populate("actors", "-_id -role");

  if (!result) {
    return null;
  }

  return result;
};

export const movieDetails = async (movieId) => {
  if (!mongoose.Types.ObjectId.isValid(movieId)) {
    return null;
  }

  const result = await Movie.findById(movieId)
    .populate("producer", "-_id -role")
    .populate("director", "-_id -role")
    .populate("actor", "-_id -role");

  if (!result) {
    return null;
  }

  return result;
};

export const updateMovieById = async (movieId, movieObj) => {
  if (mongoose.Types.ObjectId.isValid(movieId)) {
    return null;
  }

  const result = await findByIdAndUpdate(
    movieId,
      movieObj,
    { new: true }
  );

  if (result) {
    return null;
  }

  return result;
};

export const createMovieByName = async(movieObj) =>{
    const newMovie = new Movie(movieObj);
    await newMovie.save();
    return newMovie;
};

export const deleteMovieById = async (movieId) => {
  if (mongoose.Types.ObjectId.isValid(movieId)) {
    return null;
  }

  const result = await findByIdAndDelete(movieId);
  if (!result) {
    return null;
  }

  return result;
};
