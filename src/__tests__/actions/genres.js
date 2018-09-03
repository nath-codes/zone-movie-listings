import { genresIsFetching, genresFetchSuccess } from "../../actions/genres";
import {
  GENRES_IS_FETCHING,
  GENRES_FETCH_SUCCESS
} from "../../actions/constants";

describe("genres actions", () => {
  it("should create an action when fetching the genres", () => {
    const payload = true;
    const mockAction = {
      type: GENRES_IS_FETCHING,
      payload
    };
    expect(genresIsFetching(payload)).toEqual(mockAction);
  });

  it("should create an action when successfully fetched the genres", () => {
    const payload = [{ foo: "bar" }];
    const mockAction = {
      type: GENRES_FETCH_SUCCESS,
      payload
    };
    expect(genresFetchSuccess(payload)).toEqual(mockAction);
  });
});
