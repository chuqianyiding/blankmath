import { combineReducers } from 'redux';
import greaterThanLessThanData from './greaterThanLessThanReducer';
import addThreeNumbersData from './addThreeNumbersReducer';
import addMinusThreeNumbersData from './addMinusThreeNumbersReducer';
import addThreeNumbersMNData from './addThreeNumbersMNReducer';
import multiplicationData from './multiplicationReducer';
import multiplicationMNData from './multiplicationMNReducer';
import additionData from './additionReducer';
import additionMNData from './additionMNReducer';
import subtractionData from './subtractionReducer';
import subtractionMNData from './subtractionMNReducer';
import mixedAddMinusData from './mixedAddMinusReducer';
import mixedAddMinusMNData from './mixedAddMinusMNReducer';
import divisionData from './divisionReducer';
import divisionMNData from './divisionMNReducer';

const reducers = combineReducers({
    greaterThanLessThanData,
    addThreeNumbersData,
    addMinusThreeNumbersData,
    addThreeNumbersMNData,
    multiplicationData,
    multiplicationMNData,
    additionData,
    additionMNData,
    subtractionData,
    subtractionMNData,
    mixedAddMinusData,
    mixedAddMinusMNData,
    divisionData,
    divisionMNData,
});

export type ApplicationState = ReturnType<typeof reducers>;
console.log('ApplicationState', typeof reducers);

export default reducers;
