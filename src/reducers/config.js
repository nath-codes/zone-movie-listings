import {
  CONFIG_IS_FETCHING,
  CONFIG_FETCH_SUCCESS,
  CONFIG_FETCH_ERROR
} from "../actions/constants";

const initialState = {
  config: {},
  fetching: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONFIG_IS_FETCHING:
      return {
        ...state,
        fetching: payload
      };
    case CONFIG_FETCH_SUCCESS:
      return {
        ...state,
        config: payload,
        fetching: false
      };
    case CONFIG_FETCH_ERROR:
      return {
        ...state,
        error: payload,
        fetching: false
      };
    default:
      return state;
  }
};
