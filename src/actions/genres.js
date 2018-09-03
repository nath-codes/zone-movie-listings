import {
  GENRES_IS_FETCHING,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_ERROR
} from "./constants";

const genresIsFetching = payload => ({
  payload,
  type: GENRES_IS_FETCHING
});

const genresFetchSuccess = payload => ({
  payload,
  type: GENRES_FETCH_SUCCESS
});

const genresFetchError = payload => ({
  payload,
  type: GENRES_FETCH_ERROR
});

export { genresIsFetching, genresFetch, genresFetchSuccess, genresFetchError };
