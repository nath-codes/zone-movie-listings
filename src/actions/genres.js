import {
  GENRES_IS_FETCHING,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_ERROR
} from "./constants";
import { fetchGenres } from "../services/api";

const genresFetch = () => async dispatch => {
  dispatch(genresIsFetching(true));

  try {
    const response = await fetchGenres();
    const {
      data: { genres }
    } = response;
    dispatch(genresFetchSuccess(genres));
  } catch (error) {
    const { message } = error;
    dispatch(genresFetchError(message));
  }
  dispatch(genresIsFetching(false));
};

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
