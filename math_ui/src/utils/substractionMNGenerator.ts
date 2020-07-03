//return an array ["1+x=2","5-7=x","9+x=100","1+x=2"]

import { pickRandomArr, generateWithTemplate } from "./common";
import * as filters from "../constants/filters";

const generateFullArr = (
  from: number,
  to: number
): Array<Array<number | string>> => {
  const result = [];
  for (let i = 0; i <= to; i++)
    for (let j = 0; j <= to; j++) {
      if (i >= j && i - j >= from) {
        result.push([i, j, "x"]);
        result.push([i, "x", j]);
      }

      if (i + j >= from && i + j <= 20) {
        result.push(["x", i, j]);
      }
    }
  return result;
};

const filterRestrictions = (
  arr: Array<Array<number | string>>,
  restrictions: string[]
) => {
  if (restrictions.includes(filters.SUBTRAHEND_LESSTHAN_10)) {
    arr = arr.filter((item) => {
      if (item[0] === "x") {
        return true;
      } else if (item[1] === "x") {
        return item[2] < 10;
      } else {
        return item[1] < 10;
      }
    });
  }

  return arr;
};

export const generateSubstractionMN = (
  from: number,
  to: number,
  count: number,
  restrictions: string[]
): string[] => {
  const fullArr = generateFullArr(from, to);
  const filteredArr = filterRestrictions(fullArr, restrictions);
  const randomArr = pickRandomArr(filteredArr, count);
  return generateWithTemplate(randomArr, "-");
};
