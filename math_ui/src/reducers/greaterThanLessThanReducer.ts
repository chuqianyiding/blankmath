import {
  actionTypes as greaterThanLessThanActionTypes,
  GreatThanlessThanActionsType,
} from "../actions/greaterThanLessThanActions";
import { DigitTemplateState } from "./types";

const initialState: DigitTemplateState = {
  problemNumber: "10",
  digitNumber: "l20",
};

const greaterThanLessThanData = (
  state = initialState,
  action: GreatThanlessThanActionsType
): DigitTemplateState => {
  switch (action.type) {
    case greaterThanLessThanActionTypes.UPDATE_PROBLEM_NUMBER_GL:
      return {
        ...state,
        problemNumber: action.payload,
      };
    case greaterThanLessThanActionTypes.UPDATE_NUMBER_OF_DIGITS_GL:
      return {
        ...state,
        digitNumber: action.payload,
      };
    default:
      return state;
  }
};

export default greaterThanLessThanData;
