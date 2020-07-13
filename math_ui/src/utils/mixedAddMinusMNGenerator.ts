import { generateAdditionMN } from './additionMNGenerator';
import { generateSubstractionMN } from './subtractionMNGenerator';
import { getRandomIntFromInterval } from './common';

export const generateMixedAddMinusMN = (from: number, to: number, count: number, restrictions: string[]): string[] => {
    const additionArr: string[] = generateAdditionMN(from, to, count, restrictions);
    const subtractionArr: string[] = generateSubstractionMN(from, to, count, restrictions);
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
