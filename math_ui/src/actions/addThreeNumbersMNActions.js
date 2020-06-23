import * as types from "../constants/actionTypes";

export const updateProblemNumber = (value) => ({
  type: types.UPDATE_PROBLEM_NUMBER_ADDTHREE_MN,
  payload: value,
});

export const updateNumberOfDigits = (value) => ({
  type: types.UPDATE_NUMBER_OF_DIGITS_ADDTHREE_MN,
  payload: value,
});
