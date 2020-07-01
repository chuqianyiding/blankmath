import {
  actionTypes as addThreeNumbersActionTypes,
  AddThreeNumbersActionsType,
} from "../actions/addThreeNumbersActions";
import { DigitTemplateState } from "./types";

const initialState: DigitTemplateState = {
  problemNumber: "20",
  digitNumber: "1d",
};

const addThreeNumbersData = (
  state = initialState,
  action: AddThreeNumbersActionsType
): DigitTemplateState => {
  switch (action.type) {
    case addThreeNumbersActionTypes.UPDATE_PROBLEM_NUMBER_ADDTHREE:
      return {
        ...state,
        problemNumber: action.payload,
      };
    case addThreeNumbersActionTypes.UPDATE_NUMBER_OF_DIGITS_ADDTHREE:
      return {
        ...state,
        digitNumber: action.payload,
      };
    default:
      return state;
  }
};

export default addThreeNumbersData;
