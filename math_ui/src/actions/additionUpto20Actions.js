import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_NUMBER_A20,
  payload: value
});

export const updateProblemDirection = value => ({
  type: types.UPDATE_PROBLEM_DIRECTION_A20,
  payload: value
});
