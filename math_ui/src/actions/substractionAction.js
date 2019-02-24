import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_NUMBER,
  payload: value
});

export const updateMinuend = (checkboxName, value) => ({
  type: types.UPDATE_MINUEND,
  payload: { checkboxName, value }
});

export const handleMinuendSelectAll = () => ({
  type: types.UPDATE_MINUEND_SELECT_ALL
});

export const handleMinuend0_9 = () => ({
  type: types.UPDATE_MINUEND_0_9
});

export const handleMinuendClear = () => ({
  type: types.UPDATE_MINUEND_CLEAR
});
