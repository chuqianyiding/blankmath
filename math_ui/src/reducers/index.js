import { combineReducers } from "redux";
import subtractionUpto20Data from "./subtractionUpto20Reducer";
import subtractionMNUpto20Data from "./substractionMNUpto20Reducer";
import additionMNUpto20Data from "./additionMNUpto20Reducer";
import additionUpto20Data from "./additionUpto20Reducer";

const reducers = combineReducers({
  subtractionUpto20Data,
  subtractionMNUpto20Data,
  additionMNUpto20Data,
  additionUpto20Data
});

export default reducers;
