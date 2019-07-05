import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_NUMBER_A40,
  payload: value
});

export const updateProblemDirection = value => ({
  type: types.UPDATE_PROBLEM_DIRECTION_A40,
  payload: value
});

export const updateRestrictions = (checkboxName, value) => ({
  type: types.UPDATE_RESTRICTION_A40,
  payload: { checkboxName, value }
});
