import { ApplicationState } from "../reducers";
import { RangeTemplateState } from "../reducers/types";

export const selectSubtractionMNData = (
  state: ApplicationState
): RangeTemplateState => state.subtractionMNData;

export const selectDisableCreateBtn = (state: ApplicationState): boolean => {
  const { isFromValueError, isToValueError } = selectSubtractionMNData(state);

  return isFromValueError || isToValueError;
};

export default { selectSubtractionMNData, selectDisableCreateBtn };
