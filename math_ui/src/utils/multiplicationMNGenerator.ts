import { getRandomIntFromInterval } from "./common";

const generateMultiplicationArray = (
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
    case "l12":
      range = 12;
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
    const a1 = getRandomIntFromInterval(1, range - 1);
    const a2 = getRandomIntFromInterval(1, range - 1);

    const p = getRandomIntFromInterval(0, 2);
    let hash = "";
    let item: Array<number | string> = [];
    switch (p) {
      case 0:
        hash = `x,${a2},${a1 * a2}`;
        item = ["x", a1, a1 * a2];
        break;
      case 1:
        hash = `${a1},x,${a1 * a2}`;
        item = [a1, "x", a1 * a2];
        break;
      case 2:
        hash = `${a1},${a2},x`;
        item = [a1, a2, "x"];
        break;
      default:
        break;
    }

    if (!set.has(hash)) {
      set.add(hash);
      result.push(item);
      c++;
    }
  }

  return result;
};

export const generateMultiplicationMN = (
  digitValue: string,
  count: number
): string[] => {
  const arr = generateMultiplicationArray(digitValue, count);

  return arr.map((item) => {
    return `${item[0]}*${item[1]}=${item[2]}`;
  });
};
