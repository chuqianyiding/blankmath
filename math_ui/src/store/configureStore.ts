import { Store } from "redux";
import { ApplicationState } from "../reducers";
import * as configureProd from "./configureStore.prod";
import * as configureDev from "./configureStore.dev";

let configureStore: (state?: ApplicationState) => Store<ApplicationState>;

if (process.env.NODE_ENV === "production") {
  configureStore = configureProd.default;
} else {
  configureStore = configureDev.default;
}

export default configureStore;
