import { combineReducers } from "redux";
import subtractionUpto20Data from "./subtractionUpto20Reducer";
import subtractionMNUpto20Data from "./substractionMNUpto20Reducer";
import additionMNUpto20Data from "./additionMNUpto20Reducer";
import greaterThanLessThanData from "./greaterThanLessThanReducer";
import subtractionUpto40Data from "./subtractionUpto40Reducer";
import addThreeNumbersData from "./addThreeNumbersReducer";
import multiplicationMNUpto10Data from "./multiplicationMNUpto10Reducer";
import additionData from "./additionReducer";

const reducers = combineReducers({
  subtractionUpto20Data,
  subtractionMNUpto20Data,
  additionMNUpto20Data,
  greaterThanLessThanData,
  subtractionUpto40Data,
  addThreeNumbersData,
  multiplicationMNUpto10Data,
  additionData
});

export default reducers;
