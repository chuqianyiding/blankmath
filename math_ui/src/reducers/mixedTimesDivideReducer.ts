import {
    actionTypes as mixedTimesDivideActionTypes,
    MixedTimesDivideActionsType,
} from '../actions/mixedTimesDivideActions';
import { Direction } from '../constants/directions';
import { DigitTemplateState } from './types';

const initialState: DigitTemplateState = {
    problemNumber: '20',
    digitNumber: '1d',
    problemDirection: Direction.HORIZONTAL,
    sheetNumber: 1,
};

const mixedTimesDivideData = (state = initialState, action: MixedTimesDivideActionsType): DigitTemplateState => {
    switch (action.type) {
        case mixedTimesDivideActionTypes.UPDATE_PROBLEM_NUMBER_TIMESDIVIDE:
            return {
                ...state,
                problemNumber: action.payload,
            };
        case mixedTimesDivideActionTypes.UPDATE_PROBLEM_DIRECTION_TIMESDIVIDE:
            return {
                ...state,
                problemDirection: action.payload as Direction,
            };
        case mixedTimesDivideActionTypes.UPDATE_NUMBER_OF_DIGITS_TIMESDIVIDE:
            return {
                ...state,
                digitNumber: action.payload,
            };
        case mixedTimesDivideActionTypes.UPDATE_SHEET_NUMBER_TIMESDIVIDE:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default mixedTimesDivideData;
