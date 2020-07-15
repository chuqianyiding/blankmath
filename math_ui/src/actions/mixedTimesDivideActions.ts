import { typedAction } from './types';
import { Direction } from '../constants/directions';

export const actionTypes = {
    UPDATE_PROBLEM_NUMBER_TIMESDIVIDE: 'UPDATE_PROBLEM_NUMBER_TIMESDIVIDE',
    UPDATE_NUMBER_OF_DIGITS_TIMESDIVIDE: 'UPDATE_NUMBER_OF_DIGITS_TIMESDIVIDE',
    UPDATE_PROBLEM_DIRECTION_TIMESDIVIDE: 'UPDATE_PROBLEM_DIRECTION_TIMESDIVIDE',
    UPDATE_SHEET_NUMBER_TIMESDIVIDE: 'UPDATE_SHEET_NUMBER_TIMESDIVIDE',
};

export const updateProblemNumber = (value: string): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_NUMBER_TIMESDIVIDE,
    payload: value,
});

export const updateNumberOfDigits = (value: string): typedAction => ({
    type: actionTypes.UPDATE_NUMBER_OF_DIGITS_TIMESDIVIDE,
    payload: value,
});

export const updateProblemDirection = (value: Direction): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_DIRECTION_TIMESDIVIDE,
    payload: value,
});

export const updateSheetNumber = (value: number): typedAction => ({
    type: actionTypes.UPDATE_SHEET_NUMBER_TIMESDIVIDE,
    payload: value,
});

export type MixedTimesDivideActionsType = ReturnType<
    typeof updateProblemNumber | typeof updateNumberOfDigits | typeof updateProblemDirection | typeof updateSheetNumber
>;
