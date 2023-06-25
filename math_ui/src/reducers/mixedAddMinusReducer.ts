import { actionTypes as mixedAddMinusActionTypes, MixedAddMinusActionsType } from '../actions/mixedAddMinusActions';
import { CheckBoxType } from '../actions/types';
import { Direction } from '../constants/directions';
import { RangeTemplateState } from './types';
import { getFormValueError, getToValueError } from './common';

const initialState: RangeTemplateState = {
    problemNumber: '20',
    problemDirection: Direction.VERTICAL,
    fromValue: '0',
    toValue: '20',
    isFromValueError: false,
    isToValueError: false,
    restrictionsChecked: [],
    sheetNumber: 1,
    includeAnswerKey: false,
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

const mixedAddMinusData = (state = initialState, action: MixedAddMinusActionsType): RangeTemplateState => {
    switch (action.type) {
        case mixedAddMinusActionTypes.UPDATE_PROBLEM_ADDMINUS:
            return {
                ...state,
                problemNumber: action.payload as string,
            };
        case mixedAddMinusActionTypes.UPDATE_PROBLEM_DIRECTION_ADDMINUS:
            return {
                ...state,
                problemDirection: action.payload as Direction,
            };
        case mixedAddMinusActionTypes.UPDATE_FROM_VALUE_ADDMINUS:
            return {
                ...state,
                fromValue: action.payload as string,
                isFromValueError: getFormValueError(action.payload as string, state.toValue),
                isToValueError: getToValueError(action.payload as string, state.toValue),
            };
        case mixedAddMinusActionTypes.UPDATE_TO_VALUE_ADDMINUS:
            return {
                ...state,
                toValue: action.payload as string,
                isFromValueError: getFormValueError(state.fromValue, action.payload as string),
                isToValueError: getToValueError(state.fromValue, action.payload as string),
            };
        case mixedAddMinusActionTypes.UPDATE_RESTRICTION_ADDMINUS:
            const p: CheckBoxType = action.payload as CheckBoxType;
            return updateRestrictions(state, p.checkboxName, p.value);
        case mixedAddMinusActionTypes.UPDATE_SHEET_NUMBER_ADDMINUS:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default mixedAddMinusData;
