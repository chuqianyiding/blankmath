import { typedAction } from './types';

export const actionTypes = {
    UPDATE_PROBLEM_NUMBER_DIVISION_MN: 'UPDATE_PROBLEM_NUMBER_DIVISION_MN',
    UPDATE_NUMBER_OF_DIGITS_DIVISION_MN: 'UPDATE_NUMBER_OF_DIGITS_DIVISION_MN',
    UPDATE_SHEET_NUMBER_DIVISION_MN: 'UPDATE_SHEET_NUMBER_DIVISION_MN',
};

export const updateProblemNumber = (value: string): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_NUMBER_DIVISION_MN,
    payload: value,
});

export const updateNumberOfDigits = (value: string): typedAction => ({
    type: actionTypes.UPDATE_NUMBER_OF_DIGITS_DIVISION_MN,
    payload: value,
});

export const updateSheetNumber = (value: number): typedAction => ({
    type: actionTypes.UPDATE_SHEET_NUMBER_DIVISION_MN,
    payload: value,
});

export type DivisionMNActionsType = ReturnType<
    typeof updateProblemNumber | typeof updateNumberOfDigits | typeof updateSheetNumber
>;
