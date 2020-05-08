/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

export const checkStraightLine = function (coordinates: number[][]): boolean {
    const n: number = coordinates.length;

    for (let i = 0; i < n - 2; i++) {
        const area: number = Math.abs((1 / 2) * (coordinates[i][0] * coordinates[i + 1][1] + coordinates[i + 1][0] * coordinates[i + 2][1] + coordinates[i + 2][0] * coordinates[i][1] - (coordinates[i][1] * coordinates[i + 1][0] + coordinates[i + 1][1] * coordinates[i + 2][0] + coordinates[i + 2][1] * coordinates[i][0])));

        if (area > 0) return false;
    }

    return true;
};

const b = checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
]);
const c = checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
]);
console.log('b', b);
console.log('c', c);
