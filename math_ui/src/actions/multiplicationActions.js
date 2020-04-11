import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_NUMBER_MULTIPLICATION,
  payload: value
});

export const updateNumberOfDigits = value => ({
  type: types.UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION,
  payload: value
});

export const updateProblemDirection = value => ({
  type: types.UPDATE_PROBLEM_DIRECTION_MULTIPLICATION,
  payload: value
});
