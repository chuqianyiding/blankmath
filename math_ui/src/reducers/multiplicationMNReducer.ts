import {
    actionTypes as multiplicationMNActionTypes,
    MultiplicationMNActionsType,
} from '../actions/multiplicationMNActions';
import { Direction } from '../constants/directions';
import { DigitTemplateState } from './types';

const initialState: DigitTemplateState = {
    problemNumber: '20',
    digitNumber: '1d',
    problemDirection: Direction.HORIZONTAL,
    sheetNumber: 1,
};

const multiplicationMNData = (state = initialState, action: MultiplicationMNActionsType): DigitTemplateState => {
    switch (action.type) {
        case multiplicationMNActionTypes.UPDATE_PROBLEM_NUMBER_MULTIPLICATION_MN:
            return {
                ...state,
                problemNumber: action.payload,
            };
        case multiplicationMNActionTypes.UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION_MN:
            return {
                ...state,
                digitNumber: action.payload,
            };
        case multiplicationMNActionTypes.UPDATE_SHEET_NUMBER_MULTIPLICATION_MN:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default multiplicationMNData;
