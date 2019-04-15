import * as types from "../constants/actionTypes";
import * as directions from "../constants/directions";

const initialState = {
  problemNumber: "10",
  problemDirection: directions.VERTICAL,
  addendChecked: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
};

function updateAddend(state, checkboxName, value) {
  const stateCopy = { ...state };
  if (value) {
    stateCopy.addendChecked = stateCopy.addendChecked.slice();
    stateCopy.addendChecked.push(checkboxName);
  } else {
    stateCopy.addendChecked = stateCopy.addendChecked.filter(item => {
      if (checkboxName === item) {
        return false;
      }

      return true;
    });
  }
  return stateCopy;
}

function updateAddendSelectAll(state) {
  const stateCopy = { ...state };
  const arr = Array.from(new Array(21), (val, index) => index);
  stateCopy.addendChecked = arr;
  return stateCopy;
}

function updateAddend0_9(state) {
  const stateCopy = { ...state };
  const arr = Array.from(new Array(10), (val, index) => index);

  stateCopy.addendChecked = arr;
  return stateCopy;
}

function updateAddendClear(state) {
  const stateCopy = { ...state };
  stateCopy.addendChecked = [];
  return stateCopy;
}

const additionUpto20Data = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_A20:
      return {
        ...state,
        problemNumber: action.payload
      };
    case types.UPDATE_PROBLEM_DIRECTION_A20:
      return {
        ...state,
        problemDirection: action.payload
      };
    case types.UPDATE_ADDEND_A20:
      return updateAddend(
        state,
        action.payload.checkboxName,
        action.payload.value
      );
    case types.UPDATE_ADDEND_SELECT_ALL_A20:
      return updateAddendSelectAll(state);
    case types.UPDATE_ADDEND_0_9_A20:
      return updateAddend0_9(state);
    case types.UPDATE_ADDEND_CLEAR_A20:
      return updateAddendClear(state);
    default:
      return state;
  }
};

export default additionUpto20Data;
