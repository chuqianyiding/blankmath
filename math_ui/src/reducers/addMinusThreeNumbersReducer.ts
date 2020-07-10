import {
    actionTypes as addMinusThreeNumbersActionTypes,
    AddMinusThreeNumbersActionsType,
} from '../actions/addMinusThreeNumbersActions';
import { DigitTemplateState } from './types';

const initialState: DigitTemplateState = {
    problemNumber: '20',
    digitNumber: '1d',
    sheetNumber: 1,
};

const addMinusThreeNumbersData = (
    state = initialState,
    action: AddMinusThreeNumbersActionsType,
): DigitTemplateState => {
    switch (action.type) {
        case addMinusThreeNumbersActionTypes.UPDATE_PROBLEM_NUMBER_ADDMINUSTHREE:
            return {
                ...state,
                problemNumber: action.payload,
            };
        case addMinusThreeNumbersActionTypes.UPDATE_NUMBER_OF_DIGITS_ADDMINUSTHREE:
            return {
                ...state,
                digitNumber: action.payload,
            };
        case addMinusThreeNumbersActionTypes.UPDATE_SHEET_NUMBER_ADDMINUSTHREE:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default addMinusThreeNumbersData;
