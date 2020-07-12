import { typedAction, CheckBoxType } from './types';
import { Direction } from '../constants/directions';

export const actionTypes = {
    UPDATE_PROBLEM_ADDMINUS: 'UPDATE_PROBLEM_ADDMINUS',
    UPDATE_PROBLEM_DIRECTION_ADDMINUS: 'UPDATE_PROBLEM_DIRECTION_ADDMINUS',
    UPDATE_FROM_VALUE_ADDMINUS: 'UPDATE_FROM_VALUE_ADDMINUS',
    UPDATE_TO_VALUE_ADDMINUS: 'UPDATE_TO_VALUE_ADDMINUS',
    UPDATE_RESTRICTION_ADDMINUS: 'UPDATE_RESTRICTION_ADDMINUS',
    UPDATE_SHEET_NUMBER_ADDMINUS: 'UPDATE_SHEET_NUMBER_ADDMINUS',
};

export const updateProblemNumber = (value: string): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_ADDMINUS,
    payload: value,
});

export const updateProblemDirection = (value: Direction): typedAction => ({
    type: actionTypes.UPDATE_PROBLEM_DIRECTION_ADDMINUS,
    payload: value,
});

export const updateFromValue = (value: string): typedAction => ({
    type: actionTypes.UPDATE_FROM_VALUE_ADDMINUS,
    payload: value,
});

export const updateToValue = (value: string): typedAction => ({
    type: actionTypes.UPDATE_TO_VALUE_ADDMINUS,
    payload: value,
});

export const updateRestrictions = (checkboxName: string, value: boolean): typedAction => {
    const payload: CheckBoxType = { checkboxName, value };
    return { type: actionTypes.UPDATE_RESTRICTION_ADDMINUS, payload };
};

export const updateSheetNumber = (value: number): typedAction => ({
    type: actionTypes.UPDATE_SHEET_NUMBER_ADDMINUS,
    payload: value,
});

export type MIXEDADDMINUSActionsType = ReturnType<
    | typeof updateProblemNumber
    | typeof updateProblemDirection
    | typeof updateFromValue
    | typeof updateFromValue
    | typeof updateToValue
    | typeof updateRestrictions
    | typeof updateSheetNumber
>;
