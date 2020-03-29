import { combineReducers } from "redux";
import subtractionMNUpto20Data from "./substractionMNUpto20Reducer";
import additionMNUpto20Data from "./additionMNUpto20Reducer";
import greaterThanLessThanData from "./greaterThanLessThanReducer";
import addThreeNumbersData from "./addThreeNumbersReducer";
import multiplicationMNUpto10Data from "./multiplicationMNUpto10Reducer";
import additionData from "./additionReducer";
import additionMNData from "./additionMNReducer";
import subtractionData from "./subtractionReducer";
import subtractionMNData from "./subtractionMNReducer";

const reducers = combineReducers({
  subtractionMNUpto20Data,
  additionMNUpto20Data,
  greaterThanLessThanData,
  addThreeNumbersData,
  multiplicationMNUpto10Data,
  additionData,
  additionMNData,
  subtractionData,
  subtractionMNData
});

export default reducers;
