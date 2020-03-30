export const selectSubtractionData = state => state.subtractionData;

export const disableCreateBtn = state => {
  const { isFromValueError, isToValueError } = selectSubtractionData(state);

  return isFromValueError || isToValueError;
};

export default { selectSubtractionData, disableCreateBtn };
