// min, max included
export const getRandomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const pickRandomArr = (
  arr: Array<Array<number | string>>,
  count: number
): Array<Array<number | string>> => {
  const result = [];
  while (result.length < count && arr.length > 0) {
    const index = Math.floor(Math.random() * arr.length);
    result.push(arr[index]);
  }

  return result;
};

export const generateWithTemplate = (
  arr: Array<Array<number | string>>,
  sign: string
): string[] => {
  const result = arr.map((item) => {
    return `${item[0]}${sign}${item[1]}=${item[2]}`;
  });

  return result;
};

export const generateThreeNumberTemplate = (
  arr: Array<Array<number | string>>,
  sign: string
): string[] => {
  const result = arr.map((item) => {
    return `${item[0]}${sign}${item[1]}${sign}${item[2]}=${item[3]}`;
  });

  return result;
};
