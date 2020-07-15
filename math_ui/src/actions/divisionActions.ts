import { typedAction } from './types';
import { Direction } from '../constants/directions';

export const actionTypes = {
    UPDATE_PROBLEM_NUMBER_DIVISION: 'UPDATE_PROBLEM_NUMBER_DIVISION',
    UPDATE_NUMBER_OF_DIGITS_DIVISION: 'UPDATE_NUMBER_OF_DIGITS_DIVISION',
    UPDATE_PROBLEM_DIRECTION_DIVISION: 'UPDATE_PROBLEM_DIRECTION_DIVISION',
    UPDATE_SHEET_NUMBER_DIVISION: 'UPDATE_SHEET_NUMBER_DIVISION',
};

export const updateProblemNumber = (value: string): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_NUMBER_DIVISION,
    payload: value,
});

export const updateNumberOfDigits = (value: string): typedAction => ({
    type: actionTypes.UPDATE_NUMBER_OF_DIGITS_DIVISION,
    payload: value,
});

export const updateProblemDirection = (value: Direction): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_DIRECTION_DIVISION,
    payload: value,
});

export const updateSheetNumber = (value: number): typedAction => ({
    type: actionTypes.UPDATE_SHEET_NUMBER_DIVISION,
    payload: value,
});

export type DivisionActionsType = ReturnType<
    typeof updateProblemNumber | typeof updateNumberOfDigits | typeof updateProblemDirection | typeof updateSheetNumber
>;
