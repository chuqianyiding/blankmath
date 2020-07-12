import {
    getRandomIntFromInterval,
    isSmallAddendLessThan10,
    isSubtrahendLessThan10,
    generateWithTemplate,
} from './common';
import * as filters from '../constants/filters';

const generateAdditionMNArray = (
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

        const p = getRandomIntFromInterval(0, 2);
        let hash = '';
        let item: Array<number | string> = [];

        switch (p) {
            case 0:
                if (a1 > a2 || a2 - a1 < from) {
                    break;
                }
                item = ['x', a1, a2];
                if (restrictions.includes(filters.SUBTRAHEND_LESSTHAN_10) && !isSubtrahendLessThan10(item, '+')) {
                    break;
                }
                hash = `'x',${a1},${a2}`;
                break;
            case 1:
                if (a1 > a2 || a2 - a1 < from) {
                    break;
                }
                item = [a1, 'x', a2];
                if (restrictions.includes(filters.SUBTRAHEND_LESSTHAN_10) && !isSubtrahendLessThan10(item, '+')) {
                    break;
                }
                hash = `${a1},'x',${a2}`;
                break;
            case 2:
                if (a1 + a2 < from || a1 + a2 > to) {
                    break;
                }
                item = [a1, a2, 'x'];
                if (restrictions.includes(filters.SMALL_ADDEND_LESSTHAN_10) && !isSmallAddendLessThan10(item, '+')) {
                    break;
                }
                hash = `${a1},${a2},'x`;
                break;
            default:
                break;
        }

        if (hash && !set.has(hash)) {
            set.add(hash);
            result.push(item);
        }
    }

    return result;
};

export const generateAdditionMN = (from: number, to: number, count: number, restrictions: string[]): string[] => {
    const arr = generateAdditionMNArray(from, to, count, restrictions);
    return generateWithTemplate(arr, '+');
};
