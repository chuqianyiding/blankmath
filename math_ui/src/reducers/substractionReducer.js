import * as types from "../constants/actionTypes";

const initialState = {
  problemNumber: "10"
};

for (let i = 0; i <= 20; i++) {
  initialState[`minuendChecked_${i}`] = false;
}

function updateMinuend(state, checkboxName, value) {
  const stateCopy = { ...state };
  stateCopy[checkboxName] = value;
  return stateCopy;
}

function updateMinuendSelectAll(state) {
  const stateCopy = { ...state };
  for (let i = 0; i <= 20; i++) {
    stateCopy[`minuendChecked_${i}`] = true;
  }
  return stateCopy;
}

function updateMinuend0_9(state) {
  const stateCopy = { ...state };
  for (let i = 0; i <= 9; i++) {
    stateCopy[`minuendChecked_${i}`] = true;
  }

  for (let i = 10; i <= 20; i++) {
    stateCopy[`minuendChecked_${i}`] = false;
  }
  return stateCopy;
}

function updateMinuendClear(state) {
  const stateCopy = { ...state };
  for (let i = 0; i <= 20; i++) {
    stateCopy[`minuendChecked_${i}`] = false;
  }
  return stateCopy;
}

const substractionData = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER:
      return {
        ...state,
        problemNumber: action.payload
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
    default:
      return state;
  }
};

export default substractionData;
