import * as types from "../constants/actionTypes";
import { Direction } from "../constants/directions";
import { DigitTemplateState } from "./types";

const initialState: DigitTemplateState = {
  problemNumber: "20",
  digitNumber: "1d",
  problemDirection: Direction.HORIZONTAL,
};

const multiplicationMNData = (
  state = initialState,
  action
): DigitTemplateState => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_MULTIPLICATION_MN:
      return {
        ...state,
        problemNumber: action.payload,
      };
    case types.UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION_MN:
      return {
        ...state,
        digitNumber: action.payload,
      };
    default:
      return state;
  }
};

export default multiplicationMNData;
