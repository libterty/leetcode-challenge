/*
 *
 * isPerfectSquare
 * @param {number} num
 * @return {boolean}
 */

//Note: Do not use any built-in library function such as sqrt.
export const isPerfectSquare = function (num: number): boolean {
    if (num === 0) return false;
    if (num === 1) return true;
    let i: number = 1;
    let result: number = 1;
    while (result < num) {
        i++;
        result = i * i;
    }
    return result === num;
};

const a = isPerfectSquare(16);
const b = isPerfectSquare(14);

console.log('a', a);
console.log('b', b);
