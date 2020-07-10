import { typedAction } from './types';

export const actionTypes = {
    UPDATE_PROBLEM_NUMBER_ADDMINUSTHREE: 'UPDATE_PROBLEM_NUMBER_ADDMINUSTHREE',
    UPDATE_NUMBER_OF_DIGITS_ADDMINUSTHREE: 'UPDATE_NUMBER_OF_DIGITS_ADDMINUSTHREE',
    UPDATE_SHEET_NUMBER_ADDMINUSTHREE: 'UPDATE_SHEET_NUMBER_ADDMINUSTHREE',
};

export const updateProblemNumber = (value: string): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_NUMBER_ADDMINUSTHREE,
    payload: value,
});

export const updateNumberOfDigits = (value: string): typedAction => ({
    type: actionTypes.UPDATE_NUMBER_OF_DIGITS_ADDMINUSTHREE,
    payload: value,
});

export const updateSheetNumber = (value: number): typedAction => ({
    type: actionTypes.UPDATE_SHEET_NUMBER_ADDMINUSTHREE,
    payload: value,
});

export type AddMinusThreeNumbersActionsType = ReturnType<
    typeof updateProblemNumber | typeof updateNumberOfDigits | typeof updateSheetNumber
>;
