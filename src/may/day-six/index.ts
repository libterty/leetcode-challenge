/**
 * @param {number[]} nums
 * @return {number}
 */
interface MapObject {
    [key: string]: number;
}

export const majorityElement = function (nums: number[]): number {
    const toStrMap: MapObject = nums
        .map((i) => i.toString())
        .reduce((allChar: MapObject, char: string) => {
            if (char in allChar) {
                allChar[char]++;
            } else {
                allChar[char] = 1;
            }
            return allChar;
        }, {});

    const strToArr: [string, number][] = Object.entries(toStrMap).sort((a, b) => b[1] - a[1]);
    return Number(strToArr[0][0]);
};

majorityElement([1, 2, 3, 1]);
