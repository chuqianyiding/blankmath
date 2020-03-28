export const selectAdditionData = state => state.additionData;

export const disableCreateBtn = state => {
  const { isFromValueError, isToValueError } = selectAdditionData(state);

  return isFromValueError || isToValueError;
};

export default { selectAdditionData, disableCreateBtn };
