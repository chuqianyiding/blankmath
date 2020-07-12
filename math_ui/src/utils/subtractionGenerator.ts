import { getRandomIntFromInterval, isSubtrahendLessThan10, generateWithTemplate } from './common';
import * as filters from '../constants/filters';

const generateSubtractionArray = (
    from: number,
    to: number,
    count: number,
    restrictions: string[],
): Array<Array<number | string>> => {
    const result = [];
    const set = new Set();

    while (result.length < count) {
        const a1 = getRandomIntFromInterval(0, to);
        const a2 = getRandomIntFromInterval(0, to);

        if (a1 - a2 < from) {
            continue;
        }

        const hash = `${a1},${a2}`;

        if (!set.has(hash)) {
            const item = [a1, a2, 'x'];
            if (restrictions.includes(filters.SUBTRAHEND_LESSTHAN_10) && !isSubtrahendLessThan10(item, '-')) {
                continue;
            }

            set.add(hash);
            result.push(item);
        }
    }

    return result;
};

export const generateSubtraction = (from: number, to: number, count: number, restrictions: string[]): string[] => {
    const arr = generateSubtractionArray(from, to, count, restrictions);
    return generateWithTemplate(arr, '-');
};
