import { fetchMovies, fetchGenres, fetchConfig } from "../../services/api";
import mockAxios from "../../__mocks__/axios";
import { moviesApiUrl, genresApiUrl, configApiUrl } from "../../constants/api";

describe("API service", () => {
  it("should fetch from movies endpoint with correct params", () => {
    const params = {
      api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
      language: "en-US",
      page: 1
    };
    fetchMovies();
    expect(mockAxios.get).toBeCalledWith(moviesApiUrl, { params });
  });

  it("should fetch from genres endpoint with correct params", () => {
    const params = {
      api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
      language: "en-US"
    };
    fetchGenres();
    expect(mockAxios.get).toBeCalledWith(genresApiUrl, { params });
  });

  it("should fetch from config endpoint with correct params", () => {
    const params = {
      api_key: process.env.REACT_APP_MOVIE_DB_API_KEY
    };
    fetchConfig();
    expect(mockAxios.get).toBeCalledWith(configApiUrl, { params });
  });
});
