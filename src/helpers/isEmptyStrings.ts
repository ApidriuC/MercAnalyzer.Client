export const isEmptyStrings = (strings: string[]): boolean => {
    return strings.some(str => !str || str.trim() === '');
};