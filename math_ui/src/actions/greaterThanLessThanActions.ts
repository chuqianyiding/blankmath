import { typedAction } from "./types";

export const actionTypes = {
  UPDATE_PROBLEM_NUMBER_GL: "UPDATE_PROBLEM_NUMBER_GL",
  UPDATE_NUMBER_OF_DIGITS_GL: "UPDATE_NUMBER_OF_DIGITS_GL",
};

export const updateProblemNumber = (value: string): typedAction => ({
  type: actionTypes.UPDATE_PROBLEM_NUMBER_GL,
  payload: value,
});

export const updateNumberOfDigits = (value: string): typedAction => ({
  type: actionTypes.UPDATE_NUMBER_OF_DIGITS_GL,
  payload: value,
});

export type GreatThanlessThanActionsType = ReturnType<
  typeof updateProblemNumber | typeof updateNumberOfDigits
>;
