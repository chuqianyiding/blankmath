export const selectAdditionMNData = state => state.additionMNData;

export const disableCreateBtn = state => {
  const { isFromValueError, isToValueError } = selectAdditionMNData(state);

  return isFromValueError || isToValueError;
};

export default { selectAdditionMNData, disableCreateBtn };
