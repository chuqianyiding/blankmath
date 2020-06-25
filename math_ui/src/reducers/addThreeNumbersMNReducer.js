import * as types from "../constants/actionTypes";

const initialState = {
  problemNumber: "20",
  digitNumber: "1d",
};

const addThreeNumbersMNData = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_ADDTHREE_MN:
      return {
        ...state,
        problemNumber: action.payload,
      };
    case types.UPDATE_NUMBER_OF_DIGITS_ADDTHREE_MN:
      return {
        ...state,
        digitNumber: action.payload,
      };
    default:
      return state;
  }
};

export default addThreeNumbersMNData;
