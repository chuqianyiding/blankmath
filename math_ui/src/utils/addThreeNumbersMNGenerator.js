import {
  getRandomIntFromInterval,
  generateThreeNumberTemplate,
} from "./common";

const generateThreeNumbersArray = (digitValue, count) => {
  const result = [];
  let range = 10;

  switch (digitValue) {
    case "1d":
      range = 27;
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
    const a1 = getRandomIntFromInterval(1, range - 1);
    const a2 = getRandomIntFromInterval(1, range - 1);
    const a3 = getRandomIntFromInterval(1, range - 1);

    const p = getRandomIntFromInterval(0, 3);
    let hash = "";
    let item = [];

    switch (p) {
      case 0:
      case 1:
      case 2:
        let valid = true;
        if (a1 + a2 < a3) {
          switch (digitValue) {
            case "1d":
            case "l20":
              if (a1 >= 10 || a2 >= 10) {
                valid = false;
              }
              break;
            case "2d":
              if (a1 >= 100 || a2 >= 100) {
                valid = false;
              }
              break;
            case "3d":
              if (a1 >= 1000 || a2 >= 1000) {
                valid = false;
              }
              break;
            default:
              break;
          }
          if (valid) {
            switch (p) {
              case 0:
                hash = `x,${a1},${a2},${a3}`;
                item = ["x", a1, a2, a3];
                break;
              case 1:
                hash = `${a1},x,${a2},${a3}`;
                item = [a1, "x", a2, a3];
                break;
              case 2:
                hash = `${a1},${a2},x,${a3}`;
                item = [a1, a2, "x", a3];
                break;
              default:
                break;
            }
          }
        }
        break;
      case 3:
        valid = true;
        switch (digitValue) {
          case "1d":
            if (a1 >= 10 || a2 >= 10 || a3 >= 10) {
              valid = false;
            }
            break;
          case "2d":
            if (a1 >= 100 || a2 >= 100 || a3 >= 100) {
              valid = false;
            }
            break;
          case "3d":
            if (a1 >= 1000 || a2 >= 1000 || a3 >= 1000) {
              valid = false;
            }
            break;
          case "l20":
            if (a1 >= 10 || a2 >= 10 || a3 >= 10 || a1 + a2 + a3 > 20) {
              valid = false;
            }
            break;
          default:
            break;
        }
        if (valid) {
          hash = `${a1},${a2},${a3},x`;
          item = [a1, a2, a3, "x"];
        }

        break;
      default:
        break;
    }

    if (hash && !set.has(hash)) {
      set.add(hash);
      result.push(item);
      c++;
    }
  }

  return result;
};

export const generateThreeMissingNumbers = (digitValue, count) => {
  const arr = generateThreeNumbersArray(digitValue, count);

  return generateThreeNumberTemplate(arr, "+");
};
