import { pickRandomArr, generateWithTemplate } from "./common";
import * as filters from "../constants/filters";

const generateFullArr = (from, to) => {
  const result = []; // 7, 5, x
  for (let i = 0; i <= to; i++)
    for (let j = 0; j <= to; j++) {
      if (i - j >= from) {
        const item = [i, j, "x"];
        result.push(item);
      }
    }

  return result;
};

const filterRestrictions = (arr, restrictions) => {
  if (restrictions.includes(filters.SUBTRAHEND_LESSTHAN_10)) {
    arr = arr.filter(item => {
      return item[1] < 10;
    });
  }

  return arr;
};

export const generateSubtraction = (from, to, count, restrictions) => {
  const fullArr = generateFullArr(from, to);
  const filteredArr = filterRestrictions(fullArr, restrictions);
  const randomArr = pickRandomArr(filteredArr, count);
  return generateWithTemplate(randomArr, "-");
};
