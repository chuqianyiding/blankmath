import { actionTypes as addtionMNActionTypes, AdditionMNActionsType } from '../actions/additionMNActions';
import { CheckBoxType } from '../actions/types';
import { RangeTemplateState } from './types';
import { Direction } from '../constants/directions';
import { getFormValueError, getToValueError } from './common';

const initialState: RangeTemplateState = {
    problemNumber: '20',
    problemDirection: Direction.HORIZONTAL,
    fromValue: '0',
    toValue: '20',
    isFromValueError: false,
    isToValueError: false,
    restrictionsChecked: [],
    sheetNumber: 1,
};

const updateRestrictions = (state: RangeTemplateState, checkboxName: string, value: boolean): RangeTemplateState => {
    const stateCopy = { ...state };
    if (value) {
        stateCopy.restrictionsChecked = stateCopy.restrictionsChecked.slice();
        stateCopy.restrictionsChecked.push(checkboxName);
    } else {
        stateCopy.restrictionsChecked = stateCopy.restrictionsChecked.filter((item) => {
            if (checkboxName === item) {
                return false;
            }

            return true;
        });
    }
    return stateCopy;
};

const additionMNData = (state = initialState, action: AdditionMNActionsType): RangeTemplateState => {
    switch (action.type) {
        case addtionMNActionTypes.UPDATE_PROBLEM_ADDITION_MN:
            return {
                ...state,
                problemNumber: action.payload as string,
            };
        case addtionMNActionTypes.UPDATE_FROM_VALUE_ADDITION_MN:
            return {
                ...state,
                fromValue: action.payload as string,
                isFromValueError: getFormValueError(action.payload as string, state.toValue),
                isToValueError: getToValueError(action.payload as string, state.toValue),
            };
        case addtionMNActionTypes.UPDATE_TO_VALUE_ADDITION_MN:
            return {
                ...state,
                toValue: action.payload as string,
                isFromValueError: getFormValueError(state.fromValue, action.payload as string),
                isToValueError: getToValueError(state.fromValue, action.payload as string),
            };
        case addtionMNActionTypes.UPDATE_RESTRICTION_ADDITION_MN:
            const p: CheckBoxType = action.payload as CheckBoxType;
            return updateRestrictions(state, p.checkboxName, p.value);
        case addtionMNActionTypes.UPDATE_SHEET_NUMBER_ADDITION_MN:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default additionMNData;
