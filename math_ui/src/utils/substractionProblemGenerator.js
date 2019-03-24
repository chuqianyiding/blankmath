//return an array ["1+x=2","5-7=x","9+x=100","1+x=2"]

import { pickRandomArr, generateWithTemplate } from "./common";

const generateFullArr = (minuendArr, subtrahendArr) => {
  const result = []; // 7, 5, x
  for (let i = 0; i < minuendArr.length; i++)
    for (let j = 0; j < subtrahendArr.length; j++) {
      if (minuendArr[i] > subtrahendArr[j]) {
        const item = [minuendArr[i], subtrahendArr[j], "x"];
        result.push(item);
      }
    }

  return result;
};

export const generateSubstraction = (minuendArr, subtrahendArr, count) => {
  const fullArr = generateFullArr(minuendArr, subtrahendArr);

  const randomArr = pickRandomArr(fullArr, count);

  return generateWithTemplate(randomArr, "-");
};
