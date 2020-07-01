import { typedAction } from "./types";

export const actionTypes = {
  UPDATE_PROBLEM_NUMBER_ADDMINUSTHREE: "UPDATE_PROBLEM_NUMBER_ADDMINUSTHREE",
  UPDATE_NUMBER_OF_DIGITS_ADDMINUSTHREE:
    "UPDATE_NUMBER_OF_DIGITS_ADDMINUSTHREE",
};

export const updateProblemNumber = (value: string) =>
  typedAction(actionTypes.UPDATE_PROBLEM_NUMBER_ADDMINUSTHREE, value);

export const updateNumberOfDigits = (value: string) =>
  typedAction(actionTypes.UPDATE_NUMBER_OF_DIGITS_ADDMINUSTHREE, value);

export type AddMinusThreeNumbersActionsType = ReturnType<
  typeof updateProblemNumber | typeof updateNumberOfDigits
>;
