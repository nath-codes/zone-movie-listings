import { CONFIG_IS_FETCHING, CONFIG_FETCH_SUCCESS } from "./constants";

const configIsFetching = payload => ({
  payload,
  type: CONFIG_IS_FETCHING
});

const configFetchSuccess = payload => ({
  payload,
  type: CONFIG_FETCH_SUCCESS
});

export { configIsFetching, configFetchSuccess };
