import { typedAction } from "./types";

export const actionTypes = {
  UPDATE_PROBLEM_NUMBER_MULTIPLICATION_MN:
    "UPDATE_PROBLEM_NUMBER_MULTIPLICATION_MN",
  UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION_MN:
    "UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION_MN",
};

export const updateProblemNumber = (value: string) =>
  typedAction(actionTypes.UPDATE_PROBLEM_NUMBER_MULTIPLICATION_MN, value);

export const updateNumberOfDigits = (value: string) =>
  typedAction(actionTypes.UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION_MN, value);

export type MultiplicationMNActionsType = ReturnType<
  typeof updateProblemNumber | typeof updateNumberOfDigits
>;
