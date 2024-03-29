import { Direction } from '../constants/directions';

export interface RangeTemplateState {
    problemNumber: string;
    problemDirection: Direction;
    fromValue: string;
    toValue: string;
    isFromValueError: boolean;
    isToValueError: boolean;
    restrictionsChecked: string[];
    sheetNumber: number;
    includeAnswerKey: boolean;
}

export interface DigitTemplateState {
    problemNumber: string;
    digitNumber: string;
    problemDirection?: Direction;
    sheetNumber: number;
}
