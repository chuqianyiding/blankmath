//return an array ["1+x=2","5-7=x","9+x=100","1+x=2"]

import { pickRandomArr, generateWithTemplate } from "./common";
import * as filters from "../constants/filters";

const generateFullArr = () => {
  const result = [];
  for (let i = 0; i <= 20; i++)
    for (let j = 0; j <= 20; j++) {
      if (i >= j) {
        result.push([i, j, "x"]);
        result.push([i, "x", j]);
      }

      result.push(["x", i, j]);
    }
  return result;
};

const filterRestrictions = (arr, restrictions) => {
  if (restrictions.includes(filters.SUBTRAHEND_LESSTHAN_10)) {
    arr = arr.filter(item => {
      if (item[0][0] === "x") {
        return true;
      } else if (item[0][1] === "x") {
        return item[0][2] < 10;
      } else {
        return item[0][1] < 10;
      }
    });
  }

  return arr;
};

export const generateSubstractionMN = (count, restrictions) => {
  const fullArr = generateFullArr();
  const filteredArr = filterRestrictions(fullArr, restrictions);
  const randomArr = pickRandomArr(filteredArr, count);
  return generateWithTemplate(randomArr);
};
