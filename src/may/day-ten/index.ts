/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
export const findJudge = function (N: number, trust: number[][]): number {
    // hash table for villager
    const villagerMap: Set<number> = new Set();
    // hash table for judge
    const judgeMap: Map<number, number> = new Map();

    for (let i = 0; i < trust.length; i++) {
        // current trust
        const trusted: number = trust[i][1];
        // current trust counts
        const trust_count: number = judgeMap.get(trusted);
        // record village
        villagerMap.add(trust[i][0]);
        // Save judge
        trust_count ? judgeMap.set(trusted, trust_count + 1) : judgeMap.set(trusted, 1);
    }

    for (let [key, value] of judgeMap) {
        if (value === N - 1 && !villagerMap.has(key)) {
            return key;
        }
    }

    return !trust.length ? N : -1;
};

const a = findJudge(3, [
    [1, 3],
    [2, 3],
]);
const b = findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
]);
const c = findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
]);

console.log('logs', a, b, c);
