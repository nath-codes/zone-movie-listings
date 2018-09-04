import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  moviesFetch,
  moviesIsFetching,
  moviesFetchSuccess,
  moviesFetchError,
  moviesRatingFilterUpdate
} from "../../actions/movies";
import {
  MOVIES_IS_FETCHING,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_ERROR,
  MOVIES_RATINGS_FILTER_UPDATE
} from "../../actions/constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("movies actions", () => {
  describe("async actions", () => {
    beforeEach(function() {
      moxios.install();
    });

    afterEach(function() {
      moxios.uninstall();
    });
    it("should dispatch multiple actions when successfully fetching movies", () => {
      const store = mockStore({ movies: [] });
      const movies = [{ foo: "bar" }];
      const response = { results: movies };

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response
        });
      });

      const expectedActions = [
        {
          type: MOVIES_IS_FETCHING,
          payload: true
        },
        {
          type: MOVIES_FETCH_SUCCESS,
          payload: movies
        },
        {
          type: MOVIES_IS_FETCHING,
          payload: false
        }
      ];

      return store.dispatch(moviesFetch()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should dispatch multiple actions when fetching movies has errored", () => {
      const store = mockStore({ genres: [] });
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
          type: MOVIES_IS_FETCHING,
          payload: true
        },
        {
          type: MOVIES_FETCH_ERROR,
          payload: message
        },
        {
          type: MOVIES_IS_FETCHING,
          payload: false
        }
      ];

      return store.dispatch(moviesFetch()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
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
  it("should create an action when filtering movie rating", () => {
    const payload = "error";
    const mockAction = {
      type: MOVIES_RATINGS_FILTER_UPDATE,
      payload
    };
    expect(moviesRatingFilterUpdate(payload)).toEqual(mockAction);
  });
});
