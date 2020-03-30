import { getRandomIntFromInterval } from "./common";

const generateThreeNumbersArray = (digitValue, count) => {
  const result = [];
  let range = 10;

  switch (digitValue) {
    case "1d":
      range = 10;
      break;
    case "2d":
      range = 100;
      break;
    case "3d":
      range = 1000;
      break;
    case "l20":
      range = 10;
      break;
    default:
      break;
  }

  const set = new Set();

  let c = 0;

  while (c < count) {
    const a1 = getRandomIntFromInterval(0, range - 1);
    const a2 = getRandomIntFromInterval(0, range - 1);
    const a3 = getRandomIntFromInterval(0, range - 1);

    const signV = getRandomIntFromInterval(0, 1);
    if (signV === 0 && a1 + a2 - a3 < 0) {
      continue;
    }

    if (signV === 1 && (a1 - a2 + a3 < 0 || a1 - a2 < 0)) {
      continue;
    }

    if (digitValue === "l20") {
      if (signV === 0) {
        if (a1 + a2 - a3 > 20) {
          continue;
        }
      } else {
        if (a1 - a2 + a3 > 20) {
          continue;
        }
      }
    }
    let hash = "";
    if (signV === 0) {
      hash = `${a1}+${a2}-${a3}=x`;
    } else {
      hash = `${a1}-${a2}+${a3}=x`;
    }

    if (!set.has(hash)) {
      set.add(hash);
      result.push(hash);
      c++;
    }
  }

  return result;
};

export const generateThreeNumbers = (digitValue, count) => {
  const arr = generateThreeNumbersArray(digitValue, count);

  return arr;
};
