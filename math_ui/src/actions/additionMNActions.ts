import { typedAction, CheckBoxType } from './types';

export const actionTypes = {
    UPDATE_PROBLEM_ADDITION_MN: 'UPDATE_PROBLEM_ADDITION_MN',
    UPDATE_FROM_VALUE_ADDITION_MN: 'UPDATE_FROM_VALUE_ADDITION_MN',
    UPDATE_TO_VALUE_ADDITION_MN: 'UPDATE_TO_VALUE_ADDITION_MN',
    UPDATE_RESTRICTION_ADDITION_MN: 'UPDATE_RESTRICTION_ADDITION_MN',
    UPDATE_SHEET_NUMBER_ADDITION_MN: 'UPDATE_SHEET_NUMBER_ADDITION_MN',
};

export const updateProblemNumber = (value: string): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_ADDITION_MN,
    payload: value,
});

export const updateFromValue = (value: string): typedAction => ({
    type: actionTypes.UPDATE_FROM_VALUE_ADDITION_MN,
    payload: value,
});

export const updateToValue = (value: string): typedAction => ({
    type: actionTypes.UPDATE_TO_VALUE_ADDITION_MN,
    payload: value,
});

export const updateRestrictions = (checkboxName: string, value: boolean): typedAction => {
    const payload: CheckBoxType = {
        checkboxName,
        value,
    };
    return { type: actionTypes.UPDATE_RESTRICTION_ADDITION_MN, payload };
};

export const updateSheetNumber = (value: number): typedAction => ({
    type: actionTypes.UPDATE_SHEET_NUMBER_ADDITION_MN,
    payload: value,
});

export type AdditionMNActionsType = ReturnType<
    | typeof updateProblemNumber
    | typeof updateFromValue
    | typeof updateToValue
    | typeof updateRestrictions
    | typeof updateSheetNumber
>;
