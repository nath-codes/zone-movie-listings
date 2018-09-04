import {
  GENRES_IS_FETCHING,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_ERROR,
  MOVIES_FETCH_SUCCESS,
  GENRE_TOGGLE
} from "../actions/constants";

const initialState = {
  selected: [],
  genres: [],
  fetching: true,
  error: null
};

const getMovieGenreIds = movies => {
  const movieGenreIds = movies.reduce((genresIds, movie) => {
    genresIds.push(...movie.genre_ids);
    return genresIds;
  }, []);
  // returns unique movie genre ids
  return Array.from(new Set(movieGenreIds));
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
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        selected: getMovieGenreIds(payload)
      };
    case GENRE_TOGGLE:
      let selected;
      const currentlySelected = state.selected.indexOf(payload) !== -1;

      if (currentlySelected) {
        selected = state.selected.filter(id => id !== payload);
      } else {
        selected = [...state.selected, payload];
      }

      return {
        ...state,
        selected
      };
    default:
      return state;
  }
};
