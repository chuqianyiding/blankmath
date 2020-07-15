import { typedAction } from './types';

export const actionTypes = {
    UPDATE_PROBLEM_NUMBER_TIMESDIVIDE_MN: 'UPDATE_PROBLEM_NUMBER_TIMESDIVIDE_MN',
    UPDATE_NUMBER_OF_DIGITS_TIMESDIVIDE_MN: 'UPDATE_NUMBER_OF_DIGITS_TIMESDIVIDE_MN',
    UPDATE_PROBLEM_DIRECTION_TIMESDIVIDE_MN: 'UPDATE_PROBLEM_DIRECTION_TIMESDIVIDE_MN',
    UPDATE_SHEET_NUMBER_TIMESDIVIDE_MN: 'UPDATE_SHEET_NUMBER_TIMESDIVIDE_MN',
};

export const updateProblemNumber = (value: string): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_NUMBER_TIMESDIVIDE_MN,
    payload: value,
});

export const updateNumberOfDigits = (value: string): typedAction => ({
    type: actionTypes.UPDATE_NUMBER_OF_DIGITS_TIMESDIVIDE_MN,
    payload: value,
});

export const updateSheetNumber = (value: number): typedAction => ({
    type: actionTypes.UPDATE_SHEET_NUMBER_TIMESDIVIDE_MN,
    payload: value,
});

export type MixedTimesDivideMNActionsType = ReturnType<
    typeof updateProblemNumber | typeof updateNumberOfDigits | typeof updateSheetNumber
>;
