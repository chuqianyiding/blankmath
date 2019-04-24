import { pickRandomArr, generateWithTemplate } from "./common";

const generateFullArr = addendArr => {
  const result = []; // 7, 5, x
  for (let i = 0; i < addendArr.length; i++)
    for (let j = 0; j < addendArr.length; j++) {
      if (addendArr[i] + addendArr[j] <= 20) {
        const item = [addendArr[i], addendArr[j], "x"];
        result.push(item);
      }
    }

  return result;
};

export const generateAddition = (addendArr, count) => {
  const fullArr = generateFullArr(addendArr);

  const randomArr = pickRandomArr(fullArr, count);

  return generateWithTemplate(randomArr, "+");
};
