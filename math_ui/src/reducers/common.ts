import { LOWER_RANGE, UPPER_RANGE } from '../constants/ranges';

export const getFormValueError = (fromValue: string, toValue: string): boolean => {
    if (!fromValue) {
        return true;
    }
    const vint = parseInt(fromValue, 10);
    const toint = parseInt(toValue, 10);
    return vint < LOWER_RANGE || vint > UPPER_RANGE || vint >= toint;
};

export const getToValueError = (fromValue: string, toValue: string): boolean => {
    if (!toValue) {
        return true;
    }

    const vint = parseInt(toValue, 10);
    const fromint = parseInt(fromValue, 10);
    return vint < LOWER_RANGE || vint > UPPER_RANGE || vint <= fromint;
};
