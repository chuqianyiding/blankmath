import * as types from "../constants/actionTypes";
import { DigitTemplateState } from "./types";

const initialState: DigitTemplateState = {
  problemNumber: "10",
  digitNumber: "l20",
};

const greaterThanLessThanData = (
  state = initialState,
  action
): DigitTemplateState => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_GL:
      return {
        ...state,
        problemNumber: action.payload,
      };
    case types.UPDATE_NUMBER_OF_DIGITS_GL:
      return {
        ...state,
        digitNumber: action.payload,
      };
    default:
      return state;
  }
};

export default greaterThanLessThanData;
