import * as types from "../constants/actionTypes";
import * as directions from "../constants/directions";
import { LOWER_RANGE, UPPER_RANGE } from "../constants/ranges";

const initialState = {
  problemNumber: "20",
  problemDirection: directions.VERTICAL,
  fromValue: "0",
  toValue: "20",
  isFromValueError: false,
  isToValueError: false,
  restrictionsChecked: []
};

const updateRestrictions = (state, checkboxName, value) => {
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
};

const getFormValueError = (state, value) => {
  if (!value) {
    return true;
  }
  const vint = parseInt(value, 10);

  return vint < LOWER_RANGE || vint > UPPER_RANGE || value >= state.toValue;
};

const getToValueError = (state, value) => {
  if (!value) {
    return true;
  }

  const vint = parseInt(value, 10);
  return vint < LOWER_RANGE || vint > UPPER_RANGE || vint <= state.fromValue;
};

const additionData = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_ADDITION:
      return {
        ...state,
        problemNumber: action.payload
      };
    case types.UPDATE_PROBLEM_DIRECTION_ADDITION:
      return {
        ...state,
        problemDirection: action.payload
      };
    case types.UPDATE_FROM_VALUE_ADDITION:
      return {
        ...state,
        fromValue: action.payload,
        isFromValueError: getFormValueError(state, action.payload)
      };
    case types.UPDATE_TO_VALUE_ADDITION:
      return {
        ...state,
        toValue: action.payload,
        isToValueError: getToValueError(state, action.payload)
      };
    case types.UPDATE_RESTRICTION_ADDITION:
      return updateRestrictions(
        state,
        action.payload.checkboxName,
        action.payload.value
      );
    default:
      return state;
  }
};

export default additionData;
