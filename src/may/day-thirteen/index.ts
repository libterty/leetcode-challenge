/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
export const removeKdigits = function (num: string, k) {
    if (num.length === k) return '0';
    // 堆疊解法
    let i: number = 0;
    let stack: string[] = [];
    while (i < num.length) {
        while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
        i++;
    }
    stack = k > 0 ? stack.slice(0, -k) : stack;
    return stack.join('').replace(/^0+/, '') || '0';
};

const a = removeKdigits('0354', 1);
const b = removeKdigits('10200', 1);
const c = removeKdigits('112', 1);
console.log('a', a);
console.log('b', b);
console.log('c', c);
