export interface CardDataType {
    key: string;
    sign: string[];
    title: string;
    subtitle: string[];
    link: string;
}

export const cardData: CardDataType[] = [
    {
        key: 'additionCard',
        sign: ['plus'],
        title: 'Addition',
        subtitle: ['12 + 9 = ?', '2 + 8 = ?'],
        link: '/addition',
    },
    {
        key: 'minusCard',
        sign: ['minus'],
        title: 'Minus',
        subtitle: ['12 - 9 = ?', '8 - 2 = ?'],
        link: '/minus',
    },
    {
        key: 'mixedAddMinusCard',
        sign: ['plus', 'minus'],
        title: 'Mixed Problems',
        subtitle: ['12 + 9 = ?', '8 - 2 = ?'],
        link: '/mixed_add_minus',
    },

    {
        key: 'mnAdditionCard',
        sign: ['plus'],
        title: 'Missing Number',
        subtitle: ['7 + ? = 15', '? + 3 = 12'],
        link: '/additionmn',
    },
    {
        key: 'mnMinusCard',
        sign: ['minus'],
        title: 'Missing Number',
        subtitle: ['7 - ? = 5', '? - 3 = 12'],
        link: '/minusmn',
    },
    {
        key: 'mixedAddMinusMNCard',
        sign: ['plus', 'minus'],
        title: 'Missing Number',
        subtitle: ['7 + ? = 15', '8 - ? = 6'],
        link: '/mixed_add_minus_mn',
    },
    {
        key: 'tnpAdditionCard',
        sign: ['plus'],
        title: 'Three Number',
        subtitle: ['7 + 8 + 12 = ?', '2 + 3 + 4 = ?'],
        link: 'add_three_numbers',
    },

    {
        key: 'tnpAdditionMinusCard',
        sign: ['plus', 'minus'],
        title: 'Three Number',
        subtitle: ['17 - 8 + 7 = ?', '8 + 3 - 4 = ?'],
        link: '/add_minus_three_numbers',
    },
    {
        key: 'mnThreeNumberAdditionCard',
        sign: ['plus'],
        title: 'Missing Number',
        subtitle: ['7 + ? + 8 = 20', '2 + 3 + ? = 15'],
        link: 'add_three_numbers_mn',
    },
    {
        key: 'timesCard',
        sign: ['times'],
        title: 'Multiplication',
        subtitle: ['8 * 9 = ?', '2 * 3 = ?'],
        link: '/multiplication',
    },
    {
        key: 'divisionCard',
        sign: ['divide'],
        title: 'Division',
        subtitle: ['8 / 2 = ?', '12 / 4 = ?'],
        link: '/division',
    },
    {
        key: 'mixedTimesDivideCard',
        sign: ['times', 'divide'],
        title: 'Mixed Problems',
        subtitle: ['8 * 9 = ?', '12 / 4 = ?'],
        link: '/mixed_times_divide',
    },
    {
        key: 'mnTimesCard',
        sign: ['times'],
        title: 'Missing Number',
        subtitle: ['8 * ? = 72', '2 * ? = 6'],
        link: '/multiplicationmn',
    },
    {
        key: 'mnDivisionCard',
        sign: ['divide'],
        title: 'Missing Number',
        subtitle: ['8 / ? = 2', '? / 4 = 3'],
        link: '/division_mn',
    },
    {
        key: 'comparisionCard',
        sign: ['greaterThan', 'lessThan'],
        title: 'Comparision',
        subtitle: ['7 > 8 or 7 < 8 ?', '12 > 2 or 12 < 2 ?'],
        link: '/greater_than_less_than',
    },
];
