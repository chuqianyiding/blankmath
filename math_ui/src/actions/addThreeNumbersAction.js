import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_NUMBER_ADDTHREE,
  payload: value
});

export const updateNumberOfDigits = value => ({
  type: types.UPDATE_NUMBER_OF_DIGITS_ADDTHREE,
  payload: value
});
