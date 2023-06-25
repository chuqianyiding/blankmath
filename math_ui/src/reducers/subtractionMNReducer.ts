import { actionTypes as subtractionMNActionTypes, SubtractionMNActionsType } from '../actions/subtractionMNActions';
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

const subtractionMNData = (state = initialState, action: SubtractionMNActionsType): RangeTemplateState => {
    switch (action.type) {
        case subtractionMNActionTypes.UPDATE_PROBLEM_SUBTRACTION_MN:
            return {
                ...state,
                problemNumber: action.payload as string,
            };
        case subtractionMNActionTypes.UPDATE_FROM_VALUE_SUBTRACTION_MN:
            return {
                ...state,
                fromValue: action.payload as string,
                isFromValueError: getFormValueError(action.payload as string, state.toValue),
                isToValueError: getToValueError(action.payload as string, state.toValue),
            };
        case subtractionMNActionTypes.UPDATE_TO_VALUE_SUBTRACTION_MN:
            return {
                ...state,
                toValue: action.payload as string,
                isFromValueError: getFormValueError(action.payload as string, state.toValue),
                isToValueError: getToValueError(action.payload as string, state.toValue),
            };
        case subtractionMNActionTypes.UPDATE_RESTRICTION_SUBTRACTION_MN:
            const p: CheckBoxType = action.payload as CheckBoxType;
            return updateRestrictions(state, p.checkboxName, p.value);
        case subtractionMNActionTypes.UPDATE_SHEET_NUMBER_SUBTRACTION_MN:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default subtractionMNData;
