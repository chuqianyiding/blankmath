import { typedAction } from "./types";
import { Direction } from "../constants/directions";

export const actionTypes = {
  UPDATE_PROBLEM_NUMBER_MULTIPLICATION: "UPDATE_PROBLEM_NUMBER_MULTIPLICATION",
  UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION:
    "UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION",
  UPDATE_PROBLEM_DIRECTION_MULTIPLICATION:
    "UPDATE_PROBLEM_DIRECTION_MULTIPLICATION",
};

export const updateProblemNumber = (value: string): typedAction => ({
  type: actionTypes.UPDATE_PROBLEM_NUMBER_MULTIPLICATION,
  payload: value,
});

export const updateNumberOfDigits = (value: string): typedAction => ({
  type: actionTypes.UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION,
  payload: value,
});

export const updateProblemDirection = (value: Direction): typedAction => ({
  type: actionTypes.UPDATE_PROBLEM_DIRECTION_MULTIPLICATION,
  payload: value,
});

export type MultiplicationActionsType = ReturnType<
  | typeof updateProblemNumber
  | typeof updateNumberOfDigits
  | typeof updateProblemDirection
>;
