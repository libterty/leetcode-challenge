/**
 * @param {number} num
 * @return {number}
 */
export const findComplement = function (num: number): number {
    let inputStr: string[] = num.toString(2).split('');
    let outputStr: string = '';

    inputStr.forEach((n: string): string => (n === '1' ? (outputStr += '0') : (outputStr += '1')));

    return parseInt(outputStr, 2);
};

const data = findComplement(5);
console.log('data', data);
