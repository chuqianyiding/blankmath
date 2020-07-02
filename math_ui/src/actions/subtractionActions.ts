import { typedAction, CheckBoxType } from "./types";
import { Direction } from "../constants/directions";

export const actionTypes = {
  UPDATE_PROBLEM_SUBTRACTION: "UPDATE_PROBLEM_SUBTRACTION",
  UPDATE_PROBLEM_DIRECTION_SUBTRACTION: "UPDATE_PROBLEM_DIRECTION_SUBTRACTION",
  UPDATE_FROM_VALUE_SUBTRACTION: "UPDATE_FROM_VALUE_SUBTRACTION",
  UPDATE_TO_VALUE_SUBTRACTION: "UPDATE_TO_VALUE_SUBTRACTION",
  UPDATE_RESTRICTION_SUBTRACTION: "UPDATE_RESTRICTION_SUBTRACTION",
};

export const updateProblemNumber = (value: string): typedAction => ({
  type: actionTypes.UPDATE_PROBLEM_SUBTRACTION,
  payload: value,
});

export const updateProblemDirection = (value: Direction): typedAction => ({
  type: actionTypes.UPDATE_PROBLEM_DIRECTION_SUBTRACTION,
  payload: value,
});

export const updateFromValue = (value: string): typedAction => ({
  type: actionTypes.UPDATE_FROM_VALUE_SUBTRACTION,
  payload: value,
});

export const updateToValue = (value: string): typedAction => ({
  type: actionTypes.UPDATE_TO_VALUE_SUBTRACTION,
  payload: value,
});

export const updateRestrictions = (
  checkboxName: string,
  value: string
): typedAction => {
  const payload: CheckBoxType = {
    checkboxName,
    value,
  };
  return { type: actionTypes.UPDATE_RESTRICTION_SUBTRACTION, payload };
};

export type SubtractionActionsType = ReturnType<
  | typeof updateProblemNumber
  | typeof updateProblemDirection
  | typeof updateFromValue
  | typeof updateToValue
  | typeof updateRestrictions
>;
