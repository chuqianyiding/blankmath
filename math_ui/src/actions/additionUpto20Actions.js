import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_NUMBER_A20,
  payload: value
});

export const updateProblemDirection = value => ({
  type: types.UPDATE_PROBLEM_DIRECTION_A20,
  payload: value
});

export const updateAddend = (checkboxName, value) => ({
  type: types.UPDATE_ADDEND_A20,
  payload: { checkboxName, value }
});

export const handleAddendSelectAll = () => ({
  type: types.UPDATE_ADDEND_SELECT_ALL_A20
});

export const handleAddend0_9 = () => ({
  type: types.UPDATE_ADDEND_0_9_A20
});

export const handleAddendClear = () => ({
  type: types.UPDATE_ADDEND_CLEAR_A20
});
