import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  genresFetch,
  genresIsFetching,
  genresFetchSuccess,
  genresFetchError,
  genreToggle
} from "../../actions/genres";
import {
  GENRES_IS_FETCHING,
  GENRES_FETCH_SUCCESS,
  GENRES_FETCH_ERROR,
  GENRE_TOGGLE
} from "../../actions/constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("genres actions", () => {
  describe("async actions", () => {
    beforeEach(function() {
      moxios.install();
    });

    afterEach(function() {
      moxios.uninstall();
    });
    it("should dispatch multiple actions when successfully fetching genres", () => {
      const store = mockStore({ genres: [] });
      const genres = [{ foo: "bar" }];
      const response = { genres };

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response
        });
      });

      const expectedActions = [
        {
          type: GENRES_IS_FETCHING,
          payload: true
        },
        {
          type: GENRES_FETCH_SUCCESS,
          payload: genres
        },
        {
          type: GENRES_IS_FETCHING,
          payload: false
        }
      ];

      return store.dispatch(genresFetch()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it("should dispatch multiple actions when fetching genres has errored", () => {
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
          type: GENRES_IS_FETCHING,
          payload: true
        },
        {
          type: GENRES_FETCH_ERROR,
          payload: message
        },
        {
          type: GENRES_IS_FETCHING,
          payload: false
        }
      ];

      return store.dispatch(genresFetch()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
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
  it("should create an action when fetching the genres has errored", () => {
    const payload = "error";
    const mockAction = {
      type: GENRES_FETCH_ERROR,
      payload
    };
    expect(genresFetchError(payload)).toEqual(mockAction);
  });
  it("should create an action when toggling a genre checkbox", () => {
    const payload = 27;
    const mockAction = {
      type: GENRE_TOGGLE,
      payload
    };
    expect(genreToggle(payload)).toEqual(mockAction);
  });
});
