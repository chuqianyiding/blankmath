import * as types from "../constants/actionTypes";

const initialState = {
  problemNumber: "10",
  problemDirection: "vertical",
  minuendChecked: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  subtrahendChecked: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
};

function updateMinuend(state, checkboxName, value) {
  const stateCopy = { ...state };
  if (value) {
    stateCopy.minuendChecked = stateCopy.minuendChecked.slice();
    stateCopy.minuendChecked.push(checkboxName);
  } else {
    stateCopy.minuendChecked = stateCopy.minuendChecked.filter(item => {
      if (checkboxName === item) {
        return false;
      }

      return true;
    });
  }
  return stateCopy;
}

function updateMinuendSelectAll(state) {
  const stateCopy = { ...state };
  const arr = Array.from(new Array(21), (val, index) => index);
  stateCopy.minuendChecked = arr;
  return stateCopy;
}

function updateMinuend0_9(state) {
  const stateCopy = { ...state };
  const arr = Array.from(new Array(10), (val, index) => index);

  stateCopy.minuendChecked = arr;
  return stateCopy;
}

function updateMinuendClear(state) {
  const stateCopy = { ...state };
  stateCopy.minuendChecked = [];
  return stateCopy;
}

function updateSubtrahend(state, checkboxName, value) {
  const stateCopy = { ...state };
  if (value) {
    stateCopy.subtrahendChecked = stateCopy.subtrahendChecked.slice();
    stateCopy.subtrahendChecked.push(checkboxName);
  } else {
    stateCopy.subtrahendChecked = stateCopy.subtrahendChecked.filter(item => {
      if (checkboxName === item) {
        return false;
      }

      return true;
    });
  }

  return stateCopy;
}

function updateSubtrahendSelectAll(state) {
  const stateCopy = { ...state };
  const arr = Array.from(new Array(21), (val, index) => index);
  stateCopy.subtrahendChecked = arr;
  return stateCopy;
}

function updateSubtrahend0_9(state) {
  const stateCopy = { ...state };
  const arr = Array.from(new Array(10), (val, index) => index);
  stateCopy.subtrahendChecked = arr;
  return stateCopy;
}

function updateSubtrahendClear(state) {
  const stateCopy = { ...state };
  stateCopy.subtrahendChecked = [];
  return stateCopy;
}

const substractionData = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER:
      return {
        ...state,
        problemNumber: action.payload
      };
    case types.UPDATE_PROBLEM_DIRECTION:
      return {
        ...state,
        problemDirection: action.payload
      };
    case types.UPDATE_MINUEND:
      return updateMinuend(
        state,
        action.payload.checkboxName,
        action.payload.value
      );
    case types.UPDATE_MINUEND_SELECT_ALL:
      return updateMinuendSelectAll(state);
    case types.UPDATE_MINUEND_0_9:
      return updateMinuend0_9(state);
    case types.UPDATE_MINUEND_CLEAR:
      return updateMinuendClear(state);
    case types.UPDATE_SUBTRAHEND:
      return updateSubtrahend(
        state,
        action.payload.checkboxName,
        action.payload.value
      );
    case types.UPDATE_SUBTRAHEND_SELECT_ALL:
      return updateSubtrahendSelectAll(state);
    case types.UPDATE_SUBTRAHEND_0_9:
      return updateSubtrahend0_9(state);
    case types.UPDATE_SUBTRAHEND_CLEAR:
      return updateSubtrahendClear(state);
    default:
      return state;
  }
};

export default substractionData;
