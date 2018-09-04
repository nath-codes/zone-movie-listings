import {
  MOVIES_IS_FETCHING,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_ERROR,
  MOVIES_RATINGS_FILTER_UPDATE
} from "../actions/constants";

const initialState = {
  ratingsFilter: "3",
  movies: [],
  fetching: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIES_IS_FETCHING:
      return {
        ...state,
        fetching: payload
      };
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        movies: payload,
        fetching: false
      };
    case MOVIES_FETCH_ERROR:
      return {
        ...state,
        error: payload,
        fetching: false
      };
    case MOVIES_RATINGS_FILTER_UPDATE:
      return {
        ...state,
        ratingsFilter: payload
      };
    default:
      return state;
  }
};
