import { typedAction, CheckBoxType } from "./types";

export const actionTypes = {
  UPDATE_PROBLEM_ADDITION_MN: "UPDATE_PROBLEM_ADDITION_MN",
  UPDATE_FROM_VALUE_ADDITION_MN: "UPDATE_FROM_VALUE_ADDITION_MN",
  UPDATE_TO_VALUE_ADDITION_MN: "UPDATE_TO_VALUE_ADDITION_MN",
  UPDATE_RESTRICTION_ADDITION_MN: "UPDATE_RESTRICTION_ADDITION_MN",
};

export const updateProblemNumber = (value: string) =>
  typedAction(actionTypes.UPDATE_PROBLEM_ADDITION_MN, value);

export const updateFromValue = (value: string) =>
  typedAction(actionTypes.UPDATE_FROM_VALUE_ADDITION_MN, value);

export const updateToValue = (value: string) =>
  typedAction(actionTypes.UPDATE_TO_VALUE_ADDITION_MN, value);

export const updateRestrictions = (checkboxName: string, value: string) => {
  const payload: CheckBoxType = {
    checkboxName,
    value,
  };
  return typedAction(actionTypes.UPDATE_RESTRICTION_ADDITION_MN, payload);
};

export type AdditionMNActionsType = ReturnType<
  | typeof updateProblemNumber
  | typeof updateFromValue
  | typeof updateToValue
  | typeof updateRestrictions
>;
