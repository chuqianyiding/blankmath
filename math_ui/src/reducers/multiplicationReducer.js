import * as types from "../constants/actionTypes";
import * as directions from "../constants/directions";

const initialState = {
  problemNumber: "20",
  digitNumber: "1d",
  problemDirection: directions.VERTICAL
};

const multiplicationData = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_MULTIPLICATION:
      return {
        ...state,
        problemNumber: action.payload
      };
    case types.UPDATE_PROBLEM_DIRECTION_MULTIPLICATION:
      return {
        ...state,
        problemDirection: action.payload
      };
    case types.UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION:
      return {
        ...state,
        digitNumber: action.payload
      };
    default:
      return state;
  }
};

export default multiplicationData;
