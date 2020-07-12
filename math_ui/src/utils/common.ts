// min, max included
export const getRandomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const isSmallAddendLessThan10 = (item: Array<number | string>, sign: string): boolean => {
    if (item[2] === 'x' && sign === '+') {
        // 2 +5 = x
        return Math.min(item[0] as number, item[1] as number) < 10;
    } else if (item[0] === 'x' && sign === '-') {
        // x - 3 = 5
        return Math.min(item[1] as number, item[2] as number) < 10;
    }

    return true;
};

export const isSubtrahendLessThan10 = (item: Array<number | string>, sign: string): boolean => {
    if (item[0] === 'x' && sign === '+') {
        // x +3 = 8
        return item[1] < 10;
    } else if (item[1] === 'x' && sign === '+') {
        // 3 +x + 8
        return item[0] < 10;
    } else if (item[1] === 'x' && sign === '-') {
        // 8 - x = 3
        return item[2] < 10;
    } else if (item[2] === 'x' && sign === '-') {
        // 8 - 5 = x
        return item[1] < 10;
    }

    return true;
};

export const generateWithTemplate = (arr: Array<Array<number | string>>, sign: string): string[] => {
    const result = arr.map((item) => {
        return `${item[0]}${sign}${item[1]}=${item[2]}`;
    });

    return result;
};

export const generateThreeNumberTemplate = (arr: Array<Array<number | string>>, sign: string): string[] => {
    const result = arr.map((item) => {
        return `${item[0]}${sign}${item[1]}${sign}${item[2]}=${item[3]}`;
    });

    return result;
};
