import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_NUMBER_AMN20,
  payload: value
});

export const updateRestrictions = (checkboxName, value) => ({
  type: types.UPDATE_RESTRICTION_AMN20,
  payload: { checkboxName, value }
});
