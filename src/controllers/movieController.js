import {
  createMovieByName,
  deleteMovieById,
  movieDetails,
  moviesList,
  updateMovieById,
} from "../services/movieService";

export const getMovieList = async (req, res) => {
  try {
    const result = await moviesList();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const movieId = req.params.movieId ?? "";
    const result = await movieDetails(movieId);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createMovie = async (req, res) => {
  try {
    const movieObj = req.body ?? {};

    const result = await createMovieByName(movieObj);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateMovie = async (req, res) => {
  try {
    const movieId = req?.params?.id ?? 0;
    const movieObj = req.body ?? {};

    const result = await updateMovieById(movieId, movieObj);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(result);
  }
};

export const deleteMovie = async (movieId) => {
  try {
    const movieId = req.params ?? "";

    const result = await deleteMovieById(movieId);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
