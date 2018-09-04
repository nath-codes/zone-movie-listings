import reducer from "../../reducers/movies";
import {
  MOVIES_IS_FETCHING,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_ERROR
} from "../../actions/constants";

const initialState = {
  ratingsFilter: "3",
  movies: [],
  fetching: true,
  error: null
};

describe("movies reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it("should update state when movies are being fetched", () => {
    const payload = false;
    const action = {
      type: MOVIES_IS_FETCHING,
      payload
    };
    const state = {
      ...initialState,
      fetching: payload
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
  it("should update state when movies are successfully fetched", () => {
    const payload = [{ foo: "bar" }];
    const action = {
      type: MOVIES_FETCH_SUCCESS,
      payload
    };
    const state = {
      ...initialState,
      movies: payload,
      fetching: false
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
  it("should update state when movies are not successfully fetched", () => {
    const payload = "error";
    const action = {
      type: MOVIES_FETCH_ERROR,
      payload
    };
    const state = {
      ...initialState,
      error: payload,
      fetching: false
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
});
