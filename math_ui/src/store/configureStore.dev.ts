import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "../reducers";
import { ApplicationState } from "../reducers";

const configureStore = (
  preloadState?: ApplicationState
): Store<ApplicationState> =>
  createStore(reducers, preloadState, applyMiddleware(thunk, createLogger()));

export default configureStore;
