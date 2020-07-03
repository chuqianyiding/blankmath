import {
  getRandomIntFromInterval,
  generateThreeNumberTemplate,
} from "./common";

const generateThreeNumbersArray = (
  digitValue: string,
  count: number
): Array<Array<number | string>> => {
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
    const a1 = getRandomIntFromInterval(1, range - 1);
    const a2 = getRandomIntFromInterval(1, range - 1);
    const a3 = getRandomIntFromInterval(1, range - 1);

    if (digitValue === "l20" && a1 + a2 + a3 > 20) {
      continue;
    }
    const hash = `${a1},${a2},${a3}`;

    if (!set.has(hash)) {
      const item = [a1, a2, a3, "x"];
      set.add(hash);
      result.push(item);
      c++;
    }
  }

  return result;
};

export const generateThreeNumbers = (
  digitValue: string,
  count: number
): string[] => {
  const arr = generateThreeNumbersArray(digitValue, count);

  return generateThreeNumberTemplate(arr, "+");
};
