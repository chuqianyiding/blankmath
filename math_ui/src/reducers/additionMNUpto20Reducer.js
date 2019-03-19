import * as types from "../constants/actionTypes";

const initialState = {
  problemNumber: "10",
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

const additionMNUpto20Data = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_AMN20:
      return {
        ...state,
        problemNumber: action.payload
      };
    case types.UPDATE_RESTRICTION_AMN20:
      return updateRestrictions(
        state,
        action.payload.checkboxName,
        action.payload.value
      );
    default:
      return state;
  }
};

export default additionMNUpto20Data;
