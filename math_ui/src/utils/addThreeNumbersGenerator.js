import { generateThreeNumberTemplate } from "./common";

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
      range = 20;
      break;
    default:
      break;
  }

  const set = new Set();

  let c = 0;

  while (c < count) {
    const a1 = Math.floor(Math.random() * (range - 1)) + 1;
    const a2 = Math.floor(Math.random() * (range - 1)) + 1;
    const a3 = Math.floor(Math.random() * (range - 1)) + 1;

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

export const generateThreeNumbers = (digitValue, count) => {
  const arr = generateThreeNumbersArray(digitValue, count);

  return generateThreeNumberTemplate(arr, "+");
};
