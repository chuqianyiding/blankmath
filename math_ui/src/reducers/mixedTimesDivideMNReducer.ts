import {
    actionTypes as mixedTimesDivideMNActionTypes,
    MixedTimesDivideMNActionsType,
} from '../actions/mixedTimesDivideMNActions';
import { Direction } from '../constants/directions';
import { DigitTemplateState } from './types';

const initialState: DigitTemplateState = {
    problemNumber: '20',
    digitNumber: '1d',
    problemDirection: Direction.HORIZONTAL,
    sheetNumber: 1,
};

const mixedTimesDivideMNData = (state = initialState, action: MixedTimesDivideMNActionsType): DigitTemplateState => {
    switch (action.type) {
        case mixedTimesDivideMNActionTypes.UPDATE_PROBLEM_NUMBER_TIMESDIVIDE_MN:
            return {
                ...state,
                problemNumber: action.payload,
            };
        case mixedTimesDivideMNActionTypes.UPDATE_PROBLEM_DIRECTION_TIMESDIVIDE_MN:
            return {
                ...state,
                problemDirection: action.payload as Direction,
            };
        case mixedTimesDivideMNActionTypes.UPDATE_NUMBER_OF_DIGITS_TIMESDIVIDE_MN:
            return {
                ...state,
                digitNumber: action.payload,
            };
        case mixedTimesDivideMNActionTypes.UPDATE_SHEET_NUMBER_TIMESDIVIDE_MN:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default mixedTimesDivideMNData;
