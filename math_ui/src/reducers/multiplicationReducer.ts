import {
  actionTypes as multiplicationActionTypes,
  MultiplicationActionsType,
} from "../actions/multiplicationActions";
import { Direction } from "../constants/directions";
import { DigitTemplateState } from "./types";

const initialState: DigitTemplateState = {
  problemNumber: "20",
  digitNumber: "1d",
  problemDirection: Direction.VERTICAL,
};

const multiplicationData = (
  state = initialState,
  action: MultiplicationActionsType
): DigitTemplateState => {
  switch (action.type) {
    case multiplicationActionTypes.UPDATE_PROBLEM_NUMBER_MULTIPLICATION:
      return {
        ...state,
        problemNumber: action.payload,
      };
    case multiplicationActionTypes.UPDATE_PROBLEM_DIRECTION_MULTIPLICATION:
      return {
        ...state,
        problemDirection: action.payload as Direction,
      };
    case multiplicationActionTypes.UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION:
      return {
        ...state,
        digitNumber: action.payload,
      };
    default:
      return state;
  }
};

export default multiplicationData;
