import { pickRandomArr, generateWithTemplate } from "./common";

const generateFullArr = () => {
  const result = [];
  const set = new Set();
  for (let i = 0; i <= 10; i++)
    for (let j = 0; j <= 10; j++) {
      const t1 = `${i}, ${j}, x`;
      if (!set.has(t1)) {
        result.push([i, j, "x"]);
        set.add(t1);
      }
      const t2 = `${i}, x, ${j}`;
      if (!set.has(t2)) {
        result.push([i, "x", i * j]);
        set.add(t2);
      }
    }

  return result;
};

export const generateMultiplicationMN = count => {
  const fullArr = generateFullArr();
  const randomArr = pickRandomArr(fullArr, count);
  return generateWithTemplate(randomArr, "*");
};
