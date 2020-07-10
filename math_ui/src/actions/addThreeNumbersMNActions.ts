import { typedAction } from './types';

export const actionTypes = {
    UPDATE_PROBLEM_NUMBER_ADDTHREE_MN: 'UPDATE_PROBLEM_NUMBER_ADDTHREE_MN',
    UPDATE_NUMBER_OF_DIGITS_ADDTHREE_MN: 'UPDATE_NUMBER_OF_DIGITS_ADDTHREE_MN',
    UPDATE_SHEET_NUMBER_ADDTHREE_MN: 'UPDATE_SHEET_NUMBER_ADDTHREE_MN',
};

export const updateProblemNumber = (value: string): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_NUMBER_ADDTHREE_MN,
    payload: value,
});

export const updateNumberOfDigits = (value: string): typedAction => ({
    type: actionTypes.UPDATE_NUMBER_OF_DIGITS_ADDTHREE_MN,
    payload: value,
});

export const updateSheetNumber = (value: number): typedAction => ({
    type: actionTypes.UPDATE_SHEET_NUMBER_ADDTHREE_MN,
    payload: value,
});

export type AddThreeNumbersMNActionsType = ReturnType<
    typeof updateProblemNumber | typeof updateNumberOfDigits | typeof updateSheetNumber
>;
