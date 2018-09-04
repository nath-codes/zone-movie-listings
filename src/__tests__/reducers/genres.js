import reducer from "../../reducers/genres";
import {
  GENRES_IS_FETCHING,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_ERROR,
  GENRE_TOGGLE
} from "../../actions/constants";

const initialState = {
  selected: [],
  genres: [],
  fetching: true,
  error: null
};

describe("genres reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it("should update state when genres are being fetched", () => {
    const payload = false;
    const action = {
      type: GENRES_IS_FETCHING,
      payload
    };
    const state = {
      ...initialState,
      fetching: payload
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
      ...initialState,
      genres: payload,
      fetching: false
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
      ...initialState,
      fetching: false,
      error: payload
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
  it("should update state when genre checkbox is toggled and value is not already selected", () => {
    const payload = 27;
    const action = {
      type: GENRE_TOGGLE,
      payload
    };
    const state = {
      ...initialState,
      selected: [payload]
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
  it("should update state when genre checkbox is toggled and value is already selected", () => {
    const payload = 27;
    const action = {
      type: GENRE_TOGGLE,
      payload
    };

    const currentState = {
      ...initialState,
      selected: [27]
    };

    const state = {
      ...initialState,
      selected: []
    };
    expect(reducer(currentState, action)).toEqual(state);
  });
  //   it("should return a unique list movie genre ids from movie data", () => {});
});
