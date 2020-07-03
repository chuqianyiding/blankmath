import { pickRandomArr, generateWithTemplate } from "./common";
import * as filters from "../constants/filters";

const generateFullArr = (
  from: number,
  to: number
): Array<Array<number | string>> => {
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

const filterRestrictions = (
  arr: Array<Array<number | string>>,
  restrictions: string[]
): Array<Array<number | string>> => {
  if (restrictions.includes(filters.SUBTRAHEND_LESSTHAN_10)) {
    arr = arr.filter((item) => {
      return item[1] < 10;
    });
  }

  return arr;
};

export const generateSubtraction = (
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
