import {
  CONFIG_IS_FETCHING,
  CONFIG_FETCH_SUCCESS,
  CONFIG_FETCH_ERROR
} from "./constants";

const configIsFetching = payload => ({
  payload,
  type: CONFIG_IS_FETCHING
});

const configFetchSuccess = payload => ({
  payload,
  type: CONFIG_FETCH_SUCCESS
});

const configFetchError = payload => ({
  payload,
  type: CONFIG_FETCH_ERROR
});

export { configIsFetching, configFetch, configFetchSuccess, configFetchError };
