import {
  CONFIG_IS_FETCHING,
  CONFIG_FETCH_SUCCESS,
  CONFIG_FETCH_ERROR
} from "./constants";
import { fetchConfig } from "../services/api";

const configFetch = () => async dispatch => {
  dispatch(configIsFetching(true));
  try {
    const response = await fetchConfig();
    const {
      data: { images }
    } = response;
    dispatch(configFetchSuccess(images));
  } catch (error) {
    const { message } = error;
    dispatch(configFetchError(message));
  }
  dispatch(configIsFetching(false));
};

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
