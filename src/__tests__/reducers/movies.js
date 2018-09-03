import reducer from "../../reducers/movies";
import {
  MOVIES_IS_FETCHING,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_ERROR
} from "../../actions/constants";

describe("movies reducer", () => {
  it("should return initial state", () => {
    const state = {
      movies: [],
      fetching: true,
      error: null
    };
    expect(reducer(undefined, {})).toEqual(state);
  });
  it("should update state when movies are being fetched", () => {
    const payload = false;
    const action = {
      type: MOVIES_IS_FETCHING,
      payload
    };
    const state = {
      movies: [],
      fetching: payload,
      error: null
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
      movies: payload,
      fetching: false,
      error: null
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
      movies: [],
      fetching: false,
      error: payload
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
});
