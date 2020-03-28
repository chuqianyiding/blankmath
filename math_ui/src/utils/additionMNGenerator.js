import { pickRandomArr, generateWithTemplate } from "./common";
import * as filters from "../constants/filters";

const generateFullArr = (from, to) => {
  const result = [];
  for (let i = 0; i <= to; i++)
    for (let j = 0; j <= to; j++) {
      if (i <= j) {
        result.push([i, "x", j]);
        result.push(["x", i, j]);
      }

      if (i + j <= to) {
        result.push([i, j, "x"]);
      }
    }
  return result;
};

const filterRestrictions = (arr, restrictions) => {
  if (restrictions.includes(filters.SUBTRAHEND_LESSTHAN_10)) {
    arr = arr.filter(item => {
      if (item[2] === "x") {
        return item[0] < 10 || item[1] < 10;
      } else if (item[0] === "x") {
        return item[1] < 10;
      } else {
        return item[0] < 10;
      }
    });
  }

  return arr;
};

export const generateAdditionMN = (from, to, count, restrictions) => {
  const fullArr = generateFullArr(from, to);
  const filteredArr = filterRestrictions(fullArr, restrictions);
  const randomArr = pickRandomArr(filteredArr, count);
  return generateWithTemplate(randomArr, "+");
};
