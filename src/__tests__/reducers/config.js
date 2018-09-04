import reducer from "../../reducers/config";
import {
  CONFIG_IS_FETCHING,
  CONFIG_FETCH_SUCCESS,
  CONFIG_FETCH_ERROR
} from "../../actions/constants";

const initialState = {
  config: {},
  fetching: true,
  error: null
};

describe("config reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it("should update state when config are being fetched", () => {
    const payload = false;
    const action = {
      type: CONFIG_IS_FETCHING,
      payload
    };
    const state = {
      ...initialState,
      fetching: payload
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
  it("should update state when config are successfully fetched", () => {
    const payload = { foo: "bar" };
    const action = {
      type: CONFIG_FETCH_SUCCESS,
      payload
    };
    const state = {
      ...initialState,
      config: payload,
      fetching: false
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
  it("should update state when config is not successfully fetched", () => {
    const payload = "error";
    const action = {
      type: CONFIG_FETCH_ERROR,
      payload
    };
    const state = {
      ...initialState,
      fetching: false,
      error: payload
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
});
