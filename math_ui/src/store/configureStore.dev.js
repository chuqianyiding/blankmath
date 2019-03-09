import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "../reducers";

const configureStore = preloadState =>
  createStore(reducers, preloadState, applyMiddleware(thunk, createLogger()));

export default configureStore;
