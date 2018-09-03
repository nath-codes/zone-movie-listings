import {
  moviesIsFetching,
  moviesFetchSuccess,
  moviesFetchError
} from "../../actions/movies";
import {
  MOVIES_IS_FETCHING,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_ERROR
} from "../../actions/constants";

describe("movies actions", () => {
  it("should create an action when fetching the movies", () => {
    const payload = true;
    const mockAction = {
      type: MOVIES_IS_FETCHING,
      payload
    };
    expect(moviesIsFetching(payload)).toEqual(mockAction);
  });

  it("should create an action when successfully fetched the movies", () => {
    const payload = [{ foo: "bar" }];
    const mockAction = {
      type: MOVIES_FETCH_SUCCESS,
      payload
    };
    expect(moviesFetchSuccess(payload)).toEqual(mockAction);
  });
  it("should create an action when fetching the movies has errored", () => {
    const payload = "error";
    const mockAction = {
      type: MOVIES_FETCH_ERROR,
      payload
    };
    expect(moviesFetchError(payload)).toEqual(mockAction);
  });
});
