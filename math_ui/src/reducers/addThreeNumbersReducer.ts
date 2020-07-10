import {
    actionTypes as addThreeNumbersActionTypes,
    AddThreeNumbersActionsType,
} from '../actions/addThreeNumbersActions';
import { DigitTemplateState } from './types';

const initialState: DigitTemplateState = {
    problemNumber: '20',
    digitNumber: '1d',
    sheetNumber: 1,
};

const addThreeNumbersData = (state = initialState, action: AddThreeNumbersActionsType): DigitTemplateState => {
    switch (action.type) {
        case addThreeNumbersActionTypes.UPDATE_PROBLEM_NUMBER_ADDTHREE:
            return {
                ...state,
                problemNumber: action.payload,
            };
        case addThreeNumbersActionTypes.UPDATE_NUMBER_OF_DIGITS_ADDTHREE:
            return {
                ...state,
                digitNumber: action.payload,
            };
        case addThreeNumbersActionTypes.UPDATE_SHEET_NUMBER_ADDTHREE:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default addThreeNumbersData;
