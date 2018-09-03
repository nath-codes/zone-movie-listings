import { combineReducers } from "redux";
import movies from "./movies";
import genres from "./genres";
import config from "./config";

export default combineReducers({
  movies,
  genres,
  config
});
