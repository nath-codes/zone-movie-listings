import { configIsFetching, configFetchSuccess } from "../../actions/config";
import {
  CONFIG_IS_FETCHING,
  CONFIG_FETCH_SUCCESS
} from "../../actions/constants";

describe("config actions", () => {
  it("should create an action when fetching the config", () => {
    const payload = true;
    const mockAction = {
      type: CONFIG_IS_FETCHING,
      payload
    };
    expect(configIsFetching(payload)).toEqual(mockAction);
  });

  it("should create an action when successfully fetched the config", () => {
    const payload = { foo: "bar" };
    const mockAction = {
      type: CONFIG_FETCH_SUCCESS,
      payload
    };
    expect(configFetchSuccess(payload)).toEqual(mockAction);
  });
});
