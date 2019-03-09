import * as types from "../constants/actionTypes";

export const updateProblemNumber = value => ({
  type: types.UPDATE_PROBLEM_NUMBER_S20,
  payload: value
});

export const updateProblemDirection = value => ({
  type: types.UPDATE_PROBLEM_DIRECTION_S20,
  payload: value
});

export const updateMinuend = (checkboxName, value) => ({
  type: types.UPDATE_MINUEND_S20,
  payload: { checkboxName, value }
});

export const handleMinuendSelectAll = () => ({
  type: types.UPDATE_MINUEND_SELECT_ALL_S20
});

export const handleMinuend0_9 = () => ({
  type: types.UPDATE_MINUEND_0_9_S20
});

export const handleMinuendClear = () => ({
  type: types.UPDATE_MINUEND_CLEAR_S20
});

export const updateSubtrahend = (checkboxName, value) => ({
  type: types.UPDATE_SUBTRAHEND_S20,
  payload: { checkboxName, value }
});

export const handleSubtrahendSelectAll = () => ({
  type: types.UPDATE_SUBTRAHEND_SELECT_ALL_S20
});

export const handleSubtrahend0_9 = () => ({
  type: types.UPDATE_SUBTRAHEND_0_9_S20
});

export const handleSubtrahendClear = () => ({
  type: types.UPDATE_SUBTRAHEND_CLEAR_S20
});
