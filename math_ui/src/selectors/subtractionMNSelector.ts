import { ApplicationState } from "../reducers";
import { RangeTemplateState } from "../reducers/types";

export const selectSubtractionMNData = (
  state: ApplicationState
): RangeTemplateState => state.subtractionMNData;

export const disableCreateBtn = (state: ApplicationState): boolean => {
  const { isFromValueError, isToValueError } = selectSubtractionMNData(state);

  return isFromValueError || isToValueError;
};

export default { selectSubtractionMNData, disableCreateBtn };
