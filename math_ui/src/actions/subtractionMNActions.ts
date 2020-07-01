import { typedAction } from "./types";

export const actionTypes = {
  UPDATE_PROBLEM_SUBTRACTION_MN: "UPDATE_PROBLEM_SUBTRACTION_MN",
  UPDATE_FROM_VALUE_SUBTRACTION_MN: "UPDATE_FROM_VALUE_SUBTRACTION_MN",
  UPDATE_TO_VALUE_SUBTRACTION_MN: "UPDATE_TO_VALUE_SUBTRACTION_MN",
  UPDATE_RESTRICTION_SUBTRACTION_MN: "UPDATE_RESTRICTION_SUBTRACTION_MN",
};

export const updateProblemNumber = (value: string) =>
  typedAction(actionTypes.UPDATE_PROBLEM_SUBTRACTION_MN, value);

export const updateFromValue = (value: string) =>
  typedAction(actionTypes.UPDATE_FROM_VALUE_SUBTRACTION_MN, value);

export const updateToValue = (value: string) =>
  typedAction(actionTypes.UPDATE_TO_VALUE_SUBTRACTION_MN, value);

export const updateRestrictions = (checkboxName: string, value: string) =>
  typedAction(actionTypes.UPDATE_RESTRICTION_SUBTRACTION_MN, {
    checkboxName,
    value,
  });

export type SubtractionMNActionsType = ReturnType<
  | typeof updateProblemNumber
  | typeof updateFromValue
  | typeof updateToValue
  | typeof updateRestrictions
>;
