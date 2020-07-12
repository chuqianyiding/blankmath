import { ApplicationState } from '../reducers';
import { RangeTemplateState } from '../reducers/types';

export const selectMixedAddMinusData = (state: ApplicationState): RangeTemplateState => state.mixedAddMinusData;

export const selectDisableCreateBtn = (state: ApplicationState): boolean => {
    const { isFromValueError, isToValueError } = selectMixedAddMinusData(state);

    return isFromValueError || isToValueError;
};

export default { selectMixedAddMinusData, selectDisableCreateBtn };
