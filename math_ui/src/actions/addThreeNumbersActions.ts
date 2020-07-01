import { typedAction } from "./types";

export const actionTypes = {
  UPDATE_PROBLEM_NUMBER_ADDTHREE: "UPDATE_PROBLEM_NUMBER_ADDTHREE",
  UPDATE_NUMBER_OF_DIGITS_ADDTHREE: "UPDATE_NUMBER_OF_DIGITS_ADDTHREE",
};

export const updateProblemNumber = (value: string) =>
  typedAction(actionTypes.UPDATE_PROBLEM_NUMBER_ADDTHREE, value);

export const updateNumberOfDigits = (value: string) =>
  typedAction(actionTypes.UPDATE_NUMBER_OF_DIGITS_ADDTHREE, value);

export type AddThreeNumbersActionsType = ReturnType<
  typeof updateProblemNumber | typeof updateNumberOfDigits
>;
