import { generateMultiplication } from './multiplicationGenerator';
import { generateDivision } from './divisionGenerator';
import { getRandomIntFromInterval } from './common';

export const generateMixedTimesDivide = (digitValue: string, count: number): string[] => {
    const multiplicationArr: string[] = generateMultiplication(digitValue, count);
    const divisionArr: string[] = generateDivision(digitValue, count);
    const all = [...multiplicationArr, ...divisionArr];
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
