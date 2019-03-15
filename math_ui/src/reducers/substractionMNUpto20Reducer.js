import * as types from "../constants/actionTypes";

const initialState = {
  problemNumber: "10"
};

const subtractionMNUpto20Data = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PROBLEM_NUMBER_SMN20:
      return {
        ...state,
        problemNumber: action.payload
      };
    default:
      return state;
  }
};

export default subtractionMNUpto20Data;
