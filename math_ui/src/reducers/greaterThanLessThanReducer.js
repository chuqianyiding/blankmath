import * as types from "../constants/actionTypes";

const initialState = {
  problemNumber: "10"
};

const greaterThanLessThanData = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_GL:
      return {
        ...state,
        problemNumber: action.payload
      };
    default:
      return state;
  }
};

export default greaterThanLessThanData;
