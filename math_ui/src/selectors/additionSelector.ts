import { ApplicationState } from "../reducers";
import { RangeTemplateState } from "../reducers/types";

export const selectAdditionData = (
  state: ApplicationState
): RangeTemplateState => state.additionData;

export const disableCreateBtn = (state: ApplicationState): boolean => {
  const { isFromValueError, isToValueError } = selectAdditionData(state);

  return isFromValueError || isToValueError;
};

export default { selectAdditionData, disableCreateBtn };
