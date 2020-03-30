import { combineReducers } from "redux";
import greaterThanLessThanData from "./greaterThanLessThanReducer";
import addThreeNumbersData from "./addThreeNumbersReducer";
import addMinusThreeNumbersData from "./addMinusThreeNumbersReducer";
import multiplicationMNUpto10Data from "./multiplicationMNUpto10Reducer";
import additionData from "./additionReducer";
import additionMNData from "./additionMNReducer";
import subtractionData from "./subtractionReducer";
import subtractionMNData from "./subtractionMNReducer";

const reducers = combineReducers({
  greaterThanLessThanData,
  addThreeNumbersData,
  addMinusThreeNumbersData,
  multiplicationMNUpto10Data,
  additionData,
  additionMNData,
  subtractionData,
  subtractionMNData
});

export default reducers;
