import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_ADDITION_MN,
  payload: value
});

export const updateFromValue = value => ({
  type: types.UPDATE_FROM_VALUE_ADDITION_MN,
  payload: value
});

export const updateToValue = value => ({
  type: types.UPDATE_TO_VALUE_ADDITION_MN,
  payload: value
});

export const updateRestrictions = (checkboxName, value) => ({
  type: types.UPDATE_RESTRICTION_ADDITION_MN,
  payload: { checkboxName, value }
});
