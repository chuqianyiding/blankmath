import {
    actionTypes as addThreeNumbersMNActionTypes,
    AddThreeNumbersMNActionsType,
} from '../actions/addThreeNumbersMNActions';
import { DigitTemplateState } from './types';

const initialState: DigitTemplateState = {
    problemNumber: '20',
    digitNumber: '1d',
    sheetNumber: 1,
};

const addThreeNumbersMNData = (state = initialState, action: AddThreeNumbersMNActionsType): DigitTemplateState => {
    switch (action.type) {
        case addThreeNumbersMNActionTypes.UPDATE_PROBLEM_NUMBER_ADDTHREE_MN:
            return {
                ...state,
                problemNumber: action.payload,
            };
        case addThreeNumbersMNActionTypes.UPDATE_NUMBER_OF_DIGITS_ADDTHREE_MN:
            return {
                ...state,
                digitNumber: action.payload,
            };
        case addThreeNumbersMNActionTypes.UPDATE_SHEET_NUMBER_ADDTHREE_MN:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default addThreeNumbersMNData;
