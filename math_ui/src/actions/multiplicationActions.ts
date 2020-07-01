import { typedAction } from "./types";
import { Direction } from "../constants/directions";

export const actionTypes = {
  UPDATE_PROBLEM_NUMBER_MULTIPLICATION: "UPDATE_PROBLEM_NUMBER_MULTIPLICATION",
  UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION:
    "UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION",
  UPDATE_PROBLEM_DIRECTION_MULTIPLICATION:
    "UPDATE_PROBLEM_DIRECTION_MULTIPLICATION",
};

export const updateProblemNumber = (value: string) =>
  typedAction(actionTypes.UPDATE_PROBLEM_NUMBER_MULTIPLICATION, value);

export const updateNumberOfDigits = (value: string) =>
  typedAction(actionTypes.UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION, value);

export const updateProblemDirection = (value: Direction) =>
  typedAction(actionTypes.UPDATE_PROBLEM_DIRECTION_MULTIPLICATION, value);

export type MultiplicationActionsType = ReturnType<
  | typeof updateProblemNumber
  | typeof updateNumberOfDigits
  | typeof updateProblemDirection
>;
