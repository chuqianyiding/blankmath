import * as types from "../constants/actionTypes";

const initialState = {
  problemNumber: "10"
};

const multiplicationMNUpto10Data = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_MMN10:
      return {
        ...state,
        problemNumber: action.payload
      };
    default:
      return state;
  }
};

export default multiplicationMNUpto10Data;
