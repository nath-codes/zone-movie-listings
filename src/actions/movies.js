import { MOVIES_IS_FETCHING, MOVIES_FETCH_SUCCESS } from "./constants";

const moviesIsFetching = payload => ({
  payload,
  type: MOVIES_IS_FETCHING
});

const moviesFetchSuccess = payload => ({
  payload,
  type: MOVIES_FETCH_SUCCESS
});

export { moviesIsFetching, moviesFetchSuccess };
