import * as types from "../constants/actionTypes";

const initialState = {
  problemNumber: "20",
  digitNumber: "1d"
};

const addMinusThreeNumbersData = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_ADDMINUSTHREE:
      return {
        ...state,
        problemNumber: action.payload
      };
    case types.UPDATE_NUMBER_OF_DIGITS_ADDMINUSTHREE:
      return {
        ...state,
        digitNumber: action.payload
      };
    default:
      return state;
  }
};

export default addMinusThreeNumbersData;
