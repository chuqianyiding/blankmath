import { typedAction, CheckBoxType } from "./types";
import { Direction } from "../constants/directions";

export const actionTypes = {
  UPDATE_PROBLEM_ADDITION: "UPDATE_PROBLEM_ADDITION",
  UPDATE_PROBLEM_DIRECTION_ADDITION: "UPDATE_PROBLEM_DIRECTION_ADDITION",
  UPDATE_FROM_VALUE_ADDITION: "UPDATE_FROM_VALUE_ADDITION",
  UPDATE_TO_VALUE_ADDITION: "UPDATE_TO_VALUE_ADDITION",
  UPDATE_RESTRICTION_ADDITION: "UPDATE_RESTRICTION_ADDITION",
};

export const updateProblemNumber = (value: string) =>
  typedAction(actionTypes.UPDATE_PROBLEM_ADDITION, value);

export const updateProblemDirection = (value: Direction) =>
  typedAction(actionTypes.UPDATE_PROBLEM_DIRECTION_ADDITION, value);

export const updateFromValue = (value: string) =>
  typedAction(actionTypes.UPDATE_FROM_VALUE_ADDITION, value);

export const updateToValue = (value: string) =>
  typedAction(actionTypes.UPDATE_TO_VALUE_ADDITION, value);

export const updateRestrictions = (checkboxName: string, value: string) => {
  const payload: CheckBoxType = { checkboxName, value };
  return typedAction(actionTypes.UPDATE_RESTRICTION_ADDITION, payload);
};

export type AdditionActionsType = ReturnType<
  | typeof updateProblemNumber
  | typeof updateProblemDirection
  | typeof updateFromValue
  | typeof updateFromValue
  | typeof updateToValue
  | typeof updateRestrictions
>;
