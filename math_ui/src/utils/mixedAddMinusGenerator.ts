import { generateAddition } from './additionGenerator';
import { generateSubtraction } from './subtractionGenerator';
import { getRandomIntFromInterval } from './common';

export const generateMixedAddMinus = (from: number, to: number, count: number, restrictions: string[]): string[] => {
    const additionArr: string[] = generateAddition(from, to, count, restrictions);
    const subtractionArr: string[] = generateSubtraction(from, to, count, restrictions);
    const all = [...additionArr, ...subtractionArr];
    const result: string[] = [];
    const set = new Set();
    while (result.length < count && set.size < all.length) {
        const p = getRandomIntFromInterval(0, all.length - 1);
        if (!set.has(p)) {
            set.add(p);
            result.push(all[p]);
        }
    }

    return result;
};
