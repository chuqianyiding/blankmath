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
    default:
      return state;
  }
};

export default substractionData;
