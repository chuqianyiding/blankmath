import { generateMultiplicationMN } from './multiplicationMNGenerator';
import { generateDivisionMN } from './divisionMNGenerator';
import { getRandomIntFromInterval } from './common';

export const generateMixedTimesDivideMN = (digitValue: string, count: number): string[] => {
    const multiplicationArr: string[] = generateMultiplicationMN(digitValue, count);
    const divisionArr: string[] = generateDivisionMN(digitValue, count);
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
