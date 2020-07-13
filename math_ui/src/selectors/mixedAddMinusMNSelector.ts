import { ApplicationState } from '../reducers';
import { RangeTemplateState } from '../reducers/types';

export const selectMixedAddMinusMNData = (state: ApplicationState): RangeTemplateState => state.mixedAddMinusData;

export const selectDisableCreateBtn = (state: ApplicationState): boolean => {
    const { isFromValueError, isToValueError } = selectMixedAddMinusMNData(state);

    return isFromValueError || isToValueError;
};

export default { selectMixedAddMinusMNData, selectDisableCreateBtn };
