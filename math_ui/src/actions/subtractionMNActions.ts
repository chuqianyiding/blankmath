import { typedAction, CheckBoxType } from "./types";

export const actionTypes = {
  UPDATE_PROBLEM_SUBTRACTION_MN: "UPDATE_PROBLEM_SUBTRACTION_MN",
  UPDATE_FROM_VALUE_SUBTRACTION_MN: "UPDATE_FROM_VALUE_SUBTRACTION_MN",
  UPDATE_TO_VALUE_SUBTRACTION_MN: "UPDATE_TO_VALUE_SUBTRACTION_MN",
  UPDATE_RESTRICTION_SUBTRACTION_MN: "UPDATE_RESTRICTION_SUBTRACTION_MN",
};

export const updateProblemNumber = (value: string): typedAction => ({
  type: actionTypes.UPDATE_PROBLEM_SUBTRACTION_MN,
  payload: value,
});

export const updateFromValue = (value: string): typedAction => ({
  type: actionTypes.UPDATE_FROM_VALUE_SUBTRACTION_MN,
  payload: value,
});

export const updateToValue = (value: string): typedAction => ({
  type: actionTypes.UPDATE_TO_VALUE_SUBTRACTION_MN,
  payload: value,
});

export const updateRestrictions = (
  checkboxName: string,
  value: boolean
): typedAction => {
  const payload: CheckBoxType = {
    checkboxName,
    value,
  };
  return { type: actionTypes.UPDATE_RESTRICTION_SUBTRACTION_MN, payload };
};

export type SubtractionMNActionsType = ReturnType<
  | typeof updateProblemNumber
  | typeof updateFromValue
  | typeof updateToValue
  | typeof updateRestrictions
>;
