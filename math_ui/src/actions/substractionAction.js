import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_NUMBER,
  payload: value
});

export const updateProblemDirection = value => ({
  type: types.UPDATE_PROBLEM_DIRECTION,
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

export const updateSubtrahend = (checkboxName, value) => ({
  type: types.UPDATE_SUBTRAHEND,
  payload: { checkboxName, value }
});

export const handleSubtrahendSelectAll = () => ({
  type: types.UPDATE_SUBTRAHEND_SELECT_ALL
});

export const handleSubtrahend0_9 = () => ({
  type: types.UPDATE_SUBTRAHEND_0_9
});

export const handleSubtrahendClear = () => ({
  type: types.UPDATE_SUBTRAHEND_CLEAR
});
