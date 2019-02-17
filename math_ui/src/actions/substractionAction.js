import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_NUMBER,
  payload: value
});

export const updateMinuend = (checkboxName, value) => ({
  type: types.UPDATE_MINUEND,
  payload: { checkboxName, value }
});
