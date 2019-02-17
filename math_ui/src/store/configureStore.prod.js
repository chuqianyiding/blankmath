import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const configureStore = preloadState =>
  createStore(reducers, preloadState, applyMiddleware(thunk));

export default configureStore;
