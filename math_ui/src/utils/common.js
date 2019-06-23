export const pickRandomArr = (arr, count) => {
  const result = [];
  while (result.length < count && arr.length > 0) {
    const index = Math.floor(Math.random() * arr.length);
    result.push(arr.splice(index, 1));
  }
  return result;
};

export const generateWithTemplate = (arr, sign) => {
  const result = arr.map(item => {
    return `${item[0][0]}${sign}${item[0][1]}=${item[0][2]}`;
  });

  return result;
};

export const pickRandomString = (arr, count) => {
  const result = [];
  while (result.length < count && arr.length > 0) {
    const index = Math.floor(Math.random() * arr.length);
    result.push(arr.splice(index, 1)[0]);
  }
  return result;
};
