import { combineReducers } from "redux";
import subtractionUpto20Data from "./subtractionUpto20Reducer";
import subtractionMNUpto20Data from "./substractionMNUpto20Reducer";
import additionMNUpto20Data from "./additionMNUpto20Reducer";
import additionUpto20Data from "./additionUpto20Reducer";
import greaterThanLessThanData from "./greaterThanLessThanReducer";
import additionUpto40Data from "./additionUpto40Reducer";
import subtractionUpto40Data from "./subtractionUpto40Reducer";
import addThreeNumbersData from "./addThreeNumbersReducer";
import multiplicationMNUpto10Data from "./multiplicationMNUpto10Reducer";

const reducers = combineReducers({
  subtractionUpto20Data,
  subtractionMNUpto20Data,
  additionMNUpto20Data,
  additionUpto20Data,
  greaterThanLessThanData,
  additionUpto40Data,
  subtractionUpto40Data,
  addThreeNumbersData,
  multiplicationMNUpto10Data
});

export default reducers;
