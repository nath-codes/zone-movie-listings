import axios from "axios";
import { moviesApiUrl, genresApiUrl, configApiUrl } from "../constants/api";

const params = {
  api_key: process.env.REACT_APP_MOVIE_DB_API_KEY
};

const fetchMovies = () =>
  axios.get(moviesApiUrl, {
    params: {
      ...params,
      language: "en-US",
      page: 1
    }
  });

const fetchGenres = () =>
  axios.get(genresApiUrl, {
    params: {
      ...params,
      language: "en-US"
    }
  });

const fetchConfig = () =>
  axios.get(configApiUrl, {
    params
  });

export { fetchMovies, fetchGenres, fetchConfig };
