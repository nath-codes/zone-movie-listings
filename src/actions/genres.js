import {
  GENRES_IS_FETCHING,
  GENRES_FETCH_SUCCESS,
  GENRES_FILTER_UPDATE
} from "./constants";

const genresIsFetching = payload => ({
  payload,
  type: GENRES_IS_FETCHING
});

const genresFetchSuccess = payload => ({
  payload,
  type: GENRES_FETCH_SUCCESS
});

export { genresIsFetching, genresFetchSuccess };
