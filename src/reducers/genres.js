import {
  GENRES_IS_FETCHING,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_ERROR
} from "../actions/constants";

const initialState = {
  genres: [],
  fetching: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GENRES_IS_FETCHING:
      return {
        ...state,
        fetching: payload
      };
    case GENRES_FETCH_SUCCESS:
      return {
        ...state,
        genres: payload,
        fetching: false
      };
    case GENRES_FETCH_ERROR:
      return {
        ...state,
        error: payload,
        fetching: false
      };
    default:
      return state;
  }
};
