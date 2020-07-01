import {
  actionTypes as addtionActionTypes,
  AdditionActionsType,
} from "../actions/additionActions";
import { CheckBoxType } from "../actions/types";
import { Direction } from "../constants/directions";
import { RangeTemplateState } from "./types";
import { LOWER_RANGE, UPPER_RANGE } from "../constants/ranges";

const initialState: RangeTemplateState = {
  problemNumber: "20",
  problemDirection: Direction.VERTICAL,
  fromValue: "0",
  toValue: "20",
  isFromValueError: false,
  isToValueError: false,
  restrictionsChecked: [],
};

const updateRestrictions = (
  state: RangeTemplateState,
  checkboxName: string,
  value: string
): RangeTemplateState => {
  const stateCopy = { ...state };
  if (value) {
    stateCopy.restrictionsChecked = stateCopy.restrictionsChecked.slice();
    stateCopy.restrictionsChecked.push(checkboxName);
  } else {
    stateCopy.restrictionsChecked = stateCopy.restrictionsChecked.filter(
      (item) => {
        if (checkboxName === item) {
          return false;
        }

        return true;
      }
    );
  }
  return stateCopy;
};

const getFormValueError = (
  state: RangeTemplateState,
  value: string
): boolean => {
  if (!value) {
    return true;
  }
  const vint = parseInt(value, 10);
  const toint = parseInt(state.toValue, 10);
  return vint < LOWER_RANGE || vint > UPPER_RANGE || vint >= toint;
};

const getToValueError = (state: RangeTemplateState, value: string): boolean => {
  if (!value) {
    return true;
  }

  const vint = parseInt(value, 10);
  const fromint = parseInt(state.fromValue, 10);
  return vint < LOWER_RANGE || vint > UPPER_RANGE || vint <= fromint;
};

const additionData = (
  state = initialState,
  action: AdditionActionsType
): RangeTemplateState => {
  switch (action.type) {
    case addtionActionTypes.UPDATE_PROBLEM_ADDITION:
      return {
        ...state,
        problemNumber: action.payload as string,
      };
    case addtionActionTypes.UPDATE_PROBLEM_DIRECTION_ADDITION:
      return {
        ...state,
        problemDirection: action.payload as Direction,
      };
    case addtionActionTypes.UPDATE_FROM_VALUE_ADDITION:
      return {
        ...state,
        fromValue: action.payload as string,
        isFromValueError: getFormValueError(state, action.payload as string),
      };
    case addtionActionTypes.UPDATE_TO_VALUE_ADDITION:
      return {
        ...state,
        toValue: action.payload as string,
        isToValueError: getToValueError(state, action.payload as string),
      };
    case addtionActionTypes.UPDATE_RESTRICTION_ADDITION:
      const p: CheckBoxType = action.payload as CheckBoxType;
      return updateRestrictions(state, p.checkboxName, p.value);
    default:
      return state;
  }
};

export default additionData;
