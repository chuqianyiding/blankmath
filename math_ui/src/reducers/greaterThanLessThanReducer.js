import * as types from "../constants/actionTypes";

const initialState = {
  problemNumber: "10",
  digitNumber: "l20"
};

const greaterThanLessThanData = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_GL:
      return {
        ...state,
        problemNumber: action.payload
      };
    case types.UPDATE_NUMBER_OF_DIGITS:
      return {
        ...state,
        digitNumber: action.payload
      };
    default:
      return state;
  }
};

export default greaterThanLessThanData;
