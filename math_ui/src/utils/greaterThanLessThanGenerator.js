// return an array ["5o10", ""]

import { pickRandomString } from "./common";

const generateFullArr = digitValue => {
  const result = [];

  switch (digitValue) {
    case "1d":
      for (let i = 0; i <= 9; i++)
        for (let j = 0; j <= 9; j++) {
          result.push(`${i}o${j}`);
        }
      break;
    case "2d":
      for (let i = 0; i <= 99; i++)
        for (let j = 0; j <= 99; j++) {
          result.push(`${i}o${j}`);
        }
      break;
    case "3d":
      for (let i = 0; i <= 999; i++)
        for (let j = 0; j <= 999; j++) {
          result.push(`${i}o${j}`);
        }
      break;
    case "l20":
      for (let i = 0; i <= 20; i++)
        for (let j = 0; j <= 20; j++) {
          result.push(`${i}o${j}`);
        }
      break;
    default:
      break;
  }

  return result;
};

export const generateData = (digitValue, count) => {
  const fullArr = generateFullArr(digitValue);
  const randomArr = pickRandomString(fullArr, count);
  return randomArr;
};
