import {
  MOVIES_IS_FETCHING,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_ERROR,
  MOVIES_RATINGS_FILTER_UPDATE
} from "./constants";
import { fetchMovies } from "../services/api";

const moviesFetch = () => async dispatch => {
  dispatch(moviesIsFetching(true));

  try {
    const response = await fetchMovies();
    const {
      data: { results }
    } = response;
    dispatch(moviesFetchSuccess(results));
  } catch (error) {
    const { message } = error;
    dispatch(moviesFetchError(message));
  }
  dispatch(moviesIsFetching(false));
};

const moviesIsFetching = payload => ({
  payload,
  type: MOVIES_IS_FETCHING
});

const moviesFetchSuccess = payload => ({
  payload,
  type: MOVIES_FETCH_SUCCESS
});

const moviesFetchError = payload => ({
  payload,
  type: MOVIES_FETCH_ERROR
});

const moviesRatingFilterUpdate = payload => {
  return {
    payload,
    type: MOVIES_RATINGS_FILTER_UPDATE
  };
};

export {
  moviesIsFetching,
  moviesFetch,
  moviesFetchSuccess,
  moviesFetchError,
  moviesRatingFilterUpdate
};
