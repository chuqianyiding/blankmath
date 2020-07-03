import { pickRandomArr, generateWithTemplate } from "./common";
import * as filters from "../constants/filters";

const generateFullArr = (
  from: number,
  to: number
): Array<Array<number | string>> => {
  const result = [];
  for (let i = 0; i <= to; i++)
    for (let j = 0; j <= to; j++) {
      if (i <= j && j - i >= from) {
        result.push([i, "x", j]);
        result.push(["x", i, j]);
      }

      if (i + j >= from && i + j <= to) {
        result.push([i, j, "x"]);
      }
    }
  return result;
};

const filterRestrictions = (
  arr: Array<Array<number | string>>,
  restrictions: string[]
): Array<Array<number | string>> => {
  if (restrictions.includes(filters.SUBTRAHEND_LESSTHAN_10)) {
    arr = arr.filter((item) => {
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

export const generateAdditionMN = (
  from: number,
  to: number,
  count: number,
  restrictions: string[]
): string[] => {
  const fullArr = generateFullArr(from, to);
  const filteredArr = filterRestrictions(fullArr, restrictions);
  const randomArr = pickRandomArr(filteredArr, count);
  return generateWithTemplate(randomArr, "+");
};
