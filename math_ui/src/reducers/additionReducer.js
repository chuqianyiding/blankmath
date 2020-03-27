import * as types from "../constants/actionTypes";
import * as directions from "../constants/directions";
import { LOWER_RANGE, UPPER_RANGE } from "../constants/ranges";

const initialState = {
  problemNumber: "20",
  problemDirection: directions.VERTICAL,
  fromValue: "0",
  toValue: "20",
  isFromValueError: false,
  isToValueError: false
};

const getFormValueError = (state, value) => {
  return (
    !value ||
    value < LOWER_RANGE ||
    value > UPPER_RANGE ||
    value >= state.toValue
  );
};

const getToValueError = (state, value) => {
  return (
    !value ||
    value < LOWER_RANGE ||
    value > UPPER_RANGE ||
    value <= state.fromValue
  );
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
    default:
      return state;
  }
};

export default additionData;
