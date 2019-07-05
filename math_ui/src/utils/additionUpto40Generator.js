import { pickRandomArr, generateWithTemplate } from "./common";
import * as filters from "../constants/filters";

const generateFullArr = () => {
  const result = []; // 7, 5, x
  for (let i = 0; i <= 40; i++)
    for (let j = 0; j < 40; j++) {
      if (i + j <= 40) {
        const item = [i, j, "x"];
        result.push(item);
      }
    }

  return result;
};

const filterRestrictions = (arr, restrictions) => {
  if (restrictions.includes(filters.SMALL_ADDEND_LESSTHAN_10)) {
    arr = arr.filter(item => {
      if (item[0] <= item[1]) {
        return item[0] < 10;
      }

      return item[1] < 10;
    });
  }

  return arr;
};

export const generateAdditionUpto40 = (count, restrictions) => {
  const fullArr = generateFullArr();
  const filteredArr = filterRestrictions(fullArr, restrictions);
  const randomArr = pickRandomArr(filteredArr, count);
  return generateWithTemplate(randomArr, "+");
};
