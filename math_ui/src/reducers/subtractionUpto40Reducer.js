import * as types from "../constants/actionTypes";
import * as directions from "../constants/directions";

const initialState = {
  problemNumber: "10",
  problemDirection: directions.VERTICAL,
  restrictionsChecked: []
};

function updateRestrictions(state, checkboxName, value) {
  const stateCopy = { ...state };
  if (value) {
    stateCopy.restrictionsChecked = stateCopy.restrictionsChecked.slice();
    stateCopy.restrictionsChecked.push(checkboxName);
  } else {
    stateCopy.restrictionsChecked = stateCopy.restrictionsChecked.filter(
      item => {
        if (checkboxName === item) {
          return false;
        }

        return true;
      }
    );
  }
  return stateCopy;
}

const subtractionUpto40Data = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_S40:
      return {
        ...state,
        problemNumber: action.payload
      };
    case types.UPDATE_PROBLEM_DIRECTION_S40:
      return {
        ...state,
        problemDirection: action.payload
      };
    case types.UPDATE_RESTRICTION_S40:
      return updateRestrictions(
        state,
        action.payload.checkboxName,
        action.payload.value
      );
    default:
      return state;
  }
};

export default subtractionUpto40Data;
