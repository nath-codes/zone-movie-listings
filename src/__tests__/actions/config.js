import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  configFetch,
  configIsFetching,
  configFetchSuccess,
  configFetchError
} from "../../actions/config";
import {
  CONFIG_IS_FETCHING,
  CONFIG_FETCH_SUCCESS,
  CONFIG_FETCH_ERROR
} from "../../actions/constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("config actions", () => {
  describe("async actions", () => {
    beforeEach(function() {
      moxios.install();
    });

    afterEach(function() {
      moxios.uninstall();
    });
    it("should dispatch multiple actions when successfully fetching the config", () => {
      const store = mockStore({ movies: [] });
      const config = { foo: "bar" };
      const response = { images: config };

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response
        });
      });

      const expectedActions = [
        {
          type: CONFIG_IS_FETCHING,
          payload: true
        },
        {
          type: CONFIG_FETCH_SUCCESS,
          payload: config
        },
        {
          type: CONFIG_IS_FETCHING,
          payload: false
        }
      ];

      return store.dispatch(configFetch()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should dispatch multiple actions when fetching the config has errored", () => {
      const store = mockStore({ movies: [] });
      const message = "Request failed with status code 401";
      const response = { message };
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 401,
          response
        });
      });

      const expectedActions = [
        {
          type: CONFIG_IS_FETCHING,
          payload: true
        },
        {
          type: CONFIG_FETCH_ERROR,
          payload: message
        },
        {
          type: CONFIG_IS_FETCHING,
          payload: false
        }
      ];

      return store.dispatch(configFetch()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

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

  it("should create an action when fetching the config has errored", () => {
    const payload = "error";
    const mockAction = {
      type: CONFIG_FETCH_ERROR,
      payload
    };
    expect(configFetchError(payload)).toEqual(mockAction);
  });
});
