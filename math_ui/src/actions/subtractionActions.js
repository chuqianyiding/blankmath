import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_SUBTRACTION,
  payload: value
});

export const updateProblemDirection = value => ({
  type: types.UPDATE_PROBLEM_DIRECTION_SUBTRACTION,
  payload: value
});

export const updateFromValue = value => ({
  type: types.UPDATE_FROM_VALUE_SUBTRACTION,
  payload: value
});

export const updateToValue = value => ({
  type: types.UPDATE_TO_VALUE_SUBTRACTION,
  payload: value
});

export const updateRestrictions = (checkboxName, value) => ({
  type: types.UPDATE_RESTRICTION_SUBTRACTION,
  payload: { checkboxName, value }
});
