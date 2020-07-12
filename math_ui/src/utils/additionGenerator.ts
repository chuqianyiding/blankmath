import { getRandomIntFromInterval, isSmallAddendLessThan10, generateWithTemplate } from './common';
import * as filters from '../constants/filters';

const generateAdditionArray = (
    from: number,
    to: number,
    count: number,
    restrictions: string[],
): Array<Array<number | string>> => {
    const result = [];
    const set = new Set();
    let dupCnt = 0;

    while (result.length < count) {
        const a1 = getRandomIntFromInterval(0, to);
        const a2 = getRandomIntFromInterval(0, to);

        if (a1 + a2 < from || a1 + a2 > to) {
            continue;
        }

        const hash = `${a1},${a2}`;

        if (!set.has(hash)) {
            const item = [a1, a2, 'x'];
            if (restrictions.includes(filters.SMALL_ADDEND_LESSTHAN_10) && !isSmallAddendLessThan10(item, '+')) {
                continue;
            }

            set.add(hash);
            result.push(item);
            dupCnt = 0;
        } else {
            dupCnt += 1;
        }

        if (dupCnt == 20) {
            break;
        }
    }

    return result;
};

export const generateAddition = (from: number, to: number, count: number, restrictions: string[]): string[] => {
    const arr = generateAdditionArray(from, to, count, restrictions);
    return generateWithTemplate(arr, '+');
};
