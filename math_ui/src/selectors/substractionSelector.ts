import { ApplicationState } from "../reducers";
import { RangeTemplateState } from "../reducers/types";

export const selectSubtractionData = (
  state: ApplicationState
): RangeTemplateState => state.subtractionData;

export const disableCreateBtn = (state: ApplicationState): boolean => {
  const { isFromValueError, isToValueError } = selectSubtractionData(state);

  return isFromValueError || isToValueError;
};

export default { selectSubtractionData, disableCreateBtn };
