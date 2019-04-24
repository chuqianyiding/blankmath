import { pickRandomArr, generateWithTemplate } from "./common";
import * as filters from "../constants/filters";

const generateFullArr = () => {
  const result = [];
  for (let i = 0; i <= 20; i++)
    for (let j = 0; j <= 20; j++) {
      if (i <= j) {
        result.push([i, "x", j]);
        result.push(["x", i, j]);
      }

      if (i + j <= 20) {
        result.push([i, j, "x"]);
      }
    }
  return result;
};

const filterRestrictions = (arr, restrictions) => {
  if (restrictions.includes(filters.SUBTRAHEND_LESSTHAN_10)) {
    arr = arr.filter(item => {
      if (item[2] === "x") {
        return true;
      } else if (item[0] === "x") {
        return item[1] < 10;
      } else {
        return item[0] < 10;
      }
    });
  }

  return arr;
};

export const generateAdditionMN = (count, restrictions) => {
  const fullArr = generateFullArr();
  const filteredArr = filterRestrictions(fullArr, restrictions);
  const randomArr = pickRandomArr(filteredArr, count);
  return generateWithTemplate(randomArr, "+");
};
