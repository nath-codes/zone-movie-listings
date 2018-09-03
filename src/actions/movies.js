import {
  MOVIES_IS_FETCHING,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_ERROR
} from "./constants";

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

export { moviesIsFetching, moviesFetch, moviesFetchSuccess, moviesFetchError };
