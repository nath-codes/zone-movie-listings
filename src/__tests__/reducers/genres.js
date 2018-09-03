import reducer from "../../reducers/genres";
import {
  GENRES_IS_FETCHING,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_ERROR
} from "../../actions/constants";

describe("genres reducer", () => {
  it("should return initial state", () => {
    const state = {
      genres: [],
      fetching: true,
      error: null
    };
    expect(reducer(undefined, {})).toEqual(state);
  });
  it("should update state when genres are being fetched", () => {
    const payload = false;
    const action = {
      type: GENRES_IS_FETCHING,
      payload
    };
    const state = {
      genres: [],
      fetching: payload,
      error: null
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
  it("should update state when genres are successfully fetched", () => {
    const payload = [{ foo: "bar" }];
    const action = {
      type: GENRES_FETCH_SUCCESS,
      payload
    };
    const state = {
      genres: payload,
      fetching: false,
      error: null
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
  it("should update state when genres are not successfully fetched", () => {
    const payload = "error";
    const action = {
      type: GENRES_FETCH_ERROR,
      payload
    };
    const state = {
      genres: [],
      fetching: false,
      error: payload
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
});
