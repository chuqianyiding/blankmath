import { actionTypes as subtractionActionTypes, SubtractionActionsType } from '../actions/subtractionActions';
import { CheckBoxType } from '../actions/types';
import { RangeTemplateState } from './types';
import { Direction } from '../constants/directions';
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

const subtractionData = (state = initialState, action: SubtractionActionsType): RangeTemplateState => {
    switch (action.type) {
        case subtractionActionTypes.UPDATE_PROBLEM_SUBTRACTION:
            return {
                ...state,
                problemNumber: action.payload as string,
            };
        case subtractionActionTypes.UPDATE_PROBLEM_DIRECTION_SUBTRACTION:
            return {
                ...state,
                problemDirection: action.payload as Direction,
            };
        case subtractionActionTypes.UPDATE_FROM_VALUE_SUBTRACTION:
            return {
                ...state,
                fromValue: action.payload as string,
                isFromValueError: getFormValueError(action.payload as string, state.toValue),
                isToValueError: getToValueError(action.payload as string, state.toValue),
            };
        case subtractionActionTypes.UPDATE_TO_VALUE_SUBTRACTION:
            return {
                ...state,
                toValue: action.payload as string,
                isFromValueError: getFormValueError(state.fromValue, action.payload as string),
                isToValueError: getToValueError(state.fromValue, action.payload as string),
            };
        case subtractionActionTypes.UPDATE_RESTRICTION_SUBTRACTION:
            const p: CheckBoxType = action.payload as CheckBoxType;
            return updateRestrictions(state, p.checkboxName, p.value);
        case subtractionActionTypes.UPDATE_SHEET_NUMBER_SUBTRACTION:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default subtractionData;
