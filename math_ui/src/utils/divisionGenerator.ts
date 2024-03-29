import { getRandomIntFromInterval } from './common';

const generateDivisionArray = (digitValue: string, count: number): Array<Array<number | string>> => {
    const result = [];
    let range = 10;

    switch (digitValue) {
        case '1d':
            range = 10;
            break;
        case '2d':
            range = 100;
            break;
        case '3d':
            range = 1000;
            break;
        case "l12":
            range = 13;
            break;
        case 'l20':
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

        const hash = `${a1 * a2},${a1}`;

        if (!set.has(hash)) {
            const item = [a1 * a2, a1, 'x'];
            set.add(hash);
            result.push(item);
            c++;
        }
    }

    return result;
};

export const generateDivision = (digitValue: string, count: number): string[] => {
    const arr = generateDivisionArray(digitValue, count);

    return arr.map((item) => {
        return `${item[0]}/${item[1]}=${item[2]}`;
    });
};
