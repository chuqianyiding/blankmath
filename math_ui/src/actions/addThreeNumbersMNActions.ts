import { typedAction } from "./types";

export const actionTypes = {
  UPDATE_PROBLEM_NUMBER_ADDTHREE_MN: "UPDATE_PROBLEM_NUMBER_ADDTHREE_MN",
  UPDATE_NUMBER_OF_DIGITS_ADDTHREE_MN: "UPDATE_NUMBER_OF_DIGITS_ADDTHREE_MN",
};

export const updateProblemNumber = (value: string) =>
  typedAction(actionTypes.UPDATE_PROBLEM_NUMBER_ADDTHREE_MN, value);

export const updateNumberOfDigits = (value: string) =>
  typedAction(actionTypes.UPDATE_NUMBER_OF_DIGITS_ADDTHREE_MN, value);

export type AddThreeNumbersMNActionsType = ReturnType<
  typeof updateProblemNumber | typeof updateNumberOfDigits
>;
