import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_NUMBER_ADDMINUSTHREE,
  payload: value
});

export const updateNumberOfDigits = value => ({
  type: types.UPDATE_NUMBER_OF_DIGITS_ADDMINUSTHREE,
  payload: value
});
