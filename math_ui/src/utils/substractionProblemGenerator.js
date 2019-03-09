//return an array ["1+x=2","5-7=x","9+x=100","1+x=2"]

const generateFullArr = (minuendArr, subtrahendArr) => {
  const result = []; // 7, 5, 0
  for (let i = 0; i < minuendArr.length; i++)
    for (let j = 0; j < subtrahendArr.length; j++) {
      if (minuendArr[i] > subtrahendArr[j]) {
        const item = [minuendArr[i], subtrahendArr[j], 0];
        result.push(item);
      }
    }

  return result;
};

const pickRandomArr = (arr, count) => {
  const result = [];
  while (result.length < count && arr.length > 0) {
    const index = Math.floor(Math.random() * arr.length);

    result.push(arr.splice(index, 1));
  }
  return result;
};

const generateWithTemplate = arr => {
  const result = arr.map(item => {
    return `${item[0][0]}-${item[0][1]}=x`;
  });

  return result;
};

export const generateSubstraction = (minuendArr, subtrahendArr, count) => {
  const fullArr = generateFullArr(minuendArr, subtrahendArr);

  const randomArr = pickRandomArr(fullArr, count);

  return generateWithTemplate(randomArr);
};
