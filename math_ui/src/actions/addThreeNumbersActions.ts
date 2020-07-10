import { typedAction } from './types';

export const actionTypes = {
    UPDATE_PROBLEM_NUMBER_ADDTHREE: 'UPDATE_PROBLEM_NUMBER_ADDTHREE',
    UPDATE_NUMBER_OF_DIGITS_ADDTHREE: 'UPDATE_NUMBER_OF_DIGITS_ADDTHREE',
    UPDATE_SHEET_NUMBER_ADDTHREE: 'UPDATE_SHEET_NUMBER_ADDTHREE',
};

export const updateProblemNumber = (value: string): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_NUMBER_ADDTHREE,
    payload: value,
});

export const updateNumberOfDigits = (value: string): typedAction => ({
    type: actionTypes.UPDATE_NUMBER_OF_DIGITS_ADDTHREE,
    payload: value,
});

export const updateSheetNumber = (value: number): typedAction => ({
    type: actionTypes.UPDATE_SHEET_NUMBER_ADDTHREE,
    payload: value,
});

export type AddThreeNumbersActionsType = ReturnType<
    typeof updateProblemNumber | typeof updateNumberOfDigits | typeof updateSheetNumber
>;
