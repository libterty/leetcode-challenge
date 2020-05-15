/**
 * @param {number[]} A
 * @return {number}
 */

let filterPostitives = (arr: number[]) => arr.every((i) => i > 0);
let filterNegatives = (arr: number[]) => arr.every((i) => i < 0);

var maxSubarraySumCircular = function (A: number[]): number {
    if (A.length === 0 || filterNegatives(A)) return A.sort((a, b) => b - a)[0];
    if (filterNegatives(A)) return A.reduce((a, b) => a + b, 0);

    let i: number = 0;
    let max_kadane: number = kadane(A);
    let max_wrap: number = 0;

    while (i < A.length) {
        max_wrap += A[i];
        A[i] = -A[i];
        i++;
    }

    max_wrap = max_wrap + kadane(A);
    return max_wrap > max_kadane ? max_wrap : max_kadane;
};

const kadane = (A: number[]): number => {
    let i: number = 0;
    let cur_max: number = 0;
    let max_so_far: number = 0;

    while (i < A.length) {
        cur_max = Math.max(0, cur_max + A[i]);
        max_so_far = Math.max(cur_max, max_so_far);
        i++;
    }

    return max_so_far;
};

const sd = maxSubarraySumCircular([-3, -2, -1]);
const sd1 = maxSubarraySumCircular([3, -1, 2, -1]);
const sd2 = maxSubarraySumCircular([5, -3, 5]);

console.log('a', sd);
console.log('a', sd1);
console.log('a', sd2);
