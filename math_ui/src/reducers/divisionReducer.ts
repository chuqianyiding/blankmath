import { actionTypes as divisionActionTypes, DivisionActionsType } from '../actions/divisionActions';
import { Direction } from '../constants/directions';
import { DigitTemplateState } from './types';

const initialState: DigitTemplateState = {
    problemNumber: '20',
    digitNumber: '1d',
    problemDirection: Direction.HORIZONTAL,
    sheetNumber: 1,
};

const divisionData = (state = initialState, action: DivisionActionsType): DigitTemplateState => {
    switch (action.type) {
        case divisionActionTypes.UPDATE_PROBLEM_NUMBER_DIVISION:
            return {
                ...state,
                problemNumber: action.payload,
            };
        case divisionActionTypes.UPDATE_PROBLEM_DIRECTION_DIVISION:
            return {
                ...state,
                problemDirection: action.payload as Direction,
            };
        case divisionActionTypes.UPDATE_NUMBER_OF_DIGITS_DIVISION:
            return {
                ...state,
                digitNumber: action.payload,
            };
        case divisionActionTypes.UPDATE_SHEET_NUMBER_DIVISION:
            return {
                ...state,
                sheetNumber: action.payload,
            };
        default:
            return state;
    }
};

export default divisionData;
