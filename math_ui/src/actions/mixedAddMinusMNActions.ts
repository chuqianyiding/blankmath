import { typedAction, CheckBoxType } from './types';

export const actionTypes = {
    UPDATE_PROBLEM_ADDMINUS_MN: 'UPDATE_PROBLEM_ADDMINUS_MN',
    UPDATE_PROBLEM_DIRECTION_ADDMINUS_MN: 'UPDATE_PROBLEM_DIRECTION_ADDMINUS_MN',
    UPDATE_FROM_VALUE_ADDMINUS_MN: 'UPDATE_FROM_VALUE_ADDMINUS_MN',
    UPDATE_TO_VALUE_ADDMINUS_MN: 'UPDATE_TO_VALUE_ADDMINUS_MN',
    UPDATE_RESTRICTION_ADDMINUS_MN: 'UPDATE_RESTRICTION_ADDMINUS_MN',
    UPDATE_SHEET_NUMBER_ADDMINUS_MN: 'UPDATE_SHEET_NUMBER_ADDMINUS_MN',
    UPDATE_INCLUDE_ANSWER_KEY_MN: 'UPDATE_INCLUDE_ANSWER_KEY_MN',
};

export const updateProblemNumber = (value: string): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_ADDMINUS_MN,
    payload: value,
});

export const updateFromValue = (value: string): typedAction => ({
    type: actionTypes.UPDATE_FROM_VALUE_ADDMINUS_MN,
    payload: value,
});

export const updateToValue = (value: string): typedAction => ({
    type: actionTypes.UPDATE_TO_VALUE_ADDMINUS_MN,
    payload: value,
});

export const updateRestrictions = (checkboxName: string, value: boolean): typedAction => {
    const payload: CheckBoxType = { checkboxName, value };
    return { type: actionTypes.UPDATE_RESTRICTION_ADDMINUS_MN, payload };
};

export const updateSheetNumber = (value: number): typedAction => ({
    type: actionTypes.UPDATE_SHEET_NUMBER_ADDMINUS_MN,
    payload: value,
});

export const updateIncludeAnswerkey = (value: boolean): typedAction => ({
    type: actionTypes.UPDATE_INCLUDE_ANSWER_KEY_MN,
    payload: value,
});

export type MixedAddMinusMNActionsType = ReturnType<
    | typeof updateProblemNumber
    | typeof updateFromValue
    | typeof updateFromValue
    | typeof updateToValue
    | typeof updateRestrictions
    | typeof updateSheetNumber
    | typeof updateIncludeAnswerkey
>;
