import {
    actionTypes as mixedAddMinusMNActionTypes,
    MixedAddMinusMNActionsType,
} from '../actions/mixedAddMinusMNActions';
import { CheckBoxType } from '../actions/types';
import { Direction } from '../constants/directions';
import { RangeTemplateState } from './types';
import { LOWER_RANGE, UPPER_RANGE } from '../constants/ranges';

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

const getFormValueError = (state: RangeTemplateState, value: string): boolean => {
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

const mixedAddMinusMNData = (state = initialState, action: MixedAddMinusMNActionsType): RangeTemplateState => {
    switch (action.type) {
        case mixedAddMinusMNActionTypes.UPDATE_PROBLEM_ADDMINUS_MN:
            return {
                ...state,
                problemNumber: action.payload as string,
            };
        case mixedAddMinusMNActionTypes.UPDATE_PROBLEM_DIRECTION_ADDMINUS_MN:
            return {
                ...state,
                problemDirection: action.payload as Direction,
            };
        case mixedAddMinusMNActionTypes.UPDATE_FROM_VALUE_ADDMINUS_MN:
            return {
                ...state,
                fromValue: action.payload as string,
                isFromValueError: getFormValueError(state, action.payload as string),
            };
        case mixedAddMinusMNActionTypes.UPDATE_TO_VALUE_ADDMINUS_MN:
            return {
                ...state,
                toValue: action.payload as string,
                isToValueError: getToValueError(state, action.payload as string),
            };
        case mixedAddMinusMNActionTypes.UPDATE_RESTRICTION_ADDMINUS_MN:
            const p: CheckBoxType = action.payload as CheckBoxType;
            return updateRestrictions(state, p.checkboxName, p.value);
        case mixedAddMinusMNActionTypes.UPDATE_SHEET_NUMBER_ADDMINUS_MN:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default mixedAddMinusMNData;
