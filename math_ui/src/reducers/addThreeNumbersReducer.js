import * as types from "../constants/actionTypes";

const initialState = {
  problemNumber: "10",
  digitNumber: "1d"
};

const addThreeNumbersData = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_ADDTHREE:
      return {
        ...state,
        problemNumber: action.payload
      };
    case types.UPDATE_NUMBER_OF_DIGITS_ADDTHREE:
      return {
        ...state,
        digitNumber: action.payload
      };
    default:
      return state;
  }
};

export default addThreeNumbersData;
