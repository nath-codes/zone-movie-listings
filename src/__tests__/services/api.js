import axios from "axios";
import { fetchMovies, fetchGenres, fetchConfig } from "../../services/api";
import { moviesApiUrl, genresApiUrl, configApiUrl } from "../../constants/api";

jest.mock("axios");

describe("API service", () => {
  it("should fetch from movies endpoint with correct params", () => {
    const params = {
      api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
      language: "en-US",
      page: 1
    };
    fetchMovies();
    expect(axios.get).toBeCalledWith(moviesApiUrl, { params });
  });

  it("should fetch from genres endpoint with correct params", () => {
    const params = {
      api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
      language: "en-US"
    };
    fetchGenres();
    expect(axios.get).toBeCalledWith(genresApiUrl, { params });
  });

  it("should fetch from config endpoint with correct params", () => {
    const params = {
      api_key: process.env.REACT_APP_MOVIE_DB_API_KEY
    };
    fetchConfig();
    expect(axios.get).toBeCalledWith(configApiUrl, { params });
  });
});
