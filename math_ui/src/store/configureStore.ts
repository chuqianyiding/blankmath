import { Store } from "redux";
import { ApplicationState } from "../reducers";

let configureStore: (state?: ApplicationState) => Store<ApplicationState>;

if (process.env.NODE_ENV === "production") {
  configureStore = require("./configureStore.prod").default;
} else {
  configureStore = require("./configureStore.dev").default;
}

export default configureStore;
