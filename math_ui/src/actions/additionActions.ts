import { typedAction, CheckBoxType } from "./types";
import { Direction } from "../constants/directions";

export const actionTypes = {
  UPDATE_PROBLEM_ADDITION: "UPDATE_PROBLEM_ADDITION",
  UPDATE_PROBLEM_DIRECTION_ADDITION: "UPDATE_PROBLEM_DIRECTION_ADDITION",
  UPDATE_FROM_VALUE_ADDITION: "UPDATE_FROM_VALUE_ADDITION",
  UPDATE_TO_VALUE_ADDITION: "UPDATE_TO_VALUE_ADDITION",
  UPDATE_RESTRICTION_ADDITION: "UPDATE_RESTRICTION_ADDITION",
};

export const updateProblemNumber = (value: string): typedAction => ({
  type: actionTypes.UPDATE_PROBLEM_ADDITION,
  payload: value,
});

export const updateProblemDirection = (value: Direction): typedAction => ({
  type: actionTypes.UPDATE_PROBLEM_DIRECTION_ADDITION,
  payload: value,
});

export const updateFromValue = (value: string): typedAction => ({
  type: actionTypes.UPDATE_FROM_VALUE_ADDITION,
  payload: value,
});

export const updateToValue = (value: string): typedAction => ({
  type: actionTypes.UPDATE_TO_VALUE_ADDITION,
  payload: value,
});

export const updateRestrictions = (
  checkboxName: string,
  value: boolean
): typedAction => {
  const payload: CheckBoxType = { checkboxName, value };
  return { type: actionTypes.UPDATE_RESTRICTION_ADDITION, payload };
};

export type AdditionActionsType = ReturnType<
  | typeof updateProblemNumber
  | typeof updateProblemDirection
  | typeof updateFromValue
  | typeof updateFromValue
  | typeof updateToValue
  | typeof updateRestrictions
>;
