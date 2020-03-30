export const selectSubtractionMNData = state => state.subtractionMNData;

export const disableCreateBtn = state => {
  const { isFromValueError, isToValueError } = selectSubtractionMNData(state);

  return isFromValueError || isToValueError;
};

export default { selectSubtractionMNData, disableCreateBtn };
