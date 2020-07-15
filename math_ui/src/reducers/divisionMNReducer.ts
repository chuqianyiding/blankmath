import { actionTypes as divisionMNActionTypes, DivisionMNActionsType } from '../actions/divisionMNActions';
import { Direction } from '../constants/directions';
import { DigitTemplateState } from './types';

const initialState: DigitTemplateState = {
    problemNumber: '20',
    digitNumber: '1d',
    problemDirection: Direction.HORIZONTAL,
    sheetNumber: 1,
};

const divisionMNData = (state = initialState, action: DivisionMNActionsType): DigitTemplateState => {
    switch (action.type) {
        case divisionMNActionTypes.UPDATE_PROBLEM_NUMBER_DIVISION_MN:
            return {
                ...state,
                problemNumber: action.payload,
            };
        case divisionMNActionTypes.UPDATE_NUMBER_OF_DIGITS_DIVISION_MN:
            return {
                ...state,
                digitNumber: action.payload,
            };
        case divisionMNActionTypes.UPDATE_SHEET_NUMBER_DIVISION_MN:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default divisionMNData;
