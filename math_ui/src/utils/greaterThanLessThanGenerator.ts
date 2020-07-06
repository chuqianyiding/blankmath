// return an array ["5o10", ""]

export const generateData = (digitValue: string, count: number): string[] => {
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
    const a1 = Math.floor(Math.random() * range);
    const a2 = Math.floor(Math.random() * range);

    const hash = `${a1},${a2}`;

    if (!set.has(hash)) {
      set.add(hash);
      result.push(`${a1}o${a2}`);
      c++;
    }
  }

  return result;
};
