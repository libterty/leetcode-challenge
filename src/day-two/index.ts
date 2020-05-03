/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
export const numJewelsInStones = function (J: string, S: string): number {
    if (!J && !S) return 0;
    const input1: string[] = J.split('');
    const input2: string[] = S.split('');
    let result: number = 0;

    for (let i = 0; i < input1.length; i++) {
        input2.forEach((el) => {
            if (el === input1[i]) {
                result++;
            }
        });
    }

    return result;
};

const test = numJewelsInStones('aA', 'aAAbbbb');
console.log('data', test);
