/**
 * @param {number[]} nums
 * @return {number}
 */
interface MapObject {
    [key: string]: number;
}

export const singleNonDuplicate = function (nums: number[]) {
    const mapStr: string[] = nums.map((n) => n.toString());

    const map: MapObject = mapStr.reduce((allChar: MapObject, char: string) => {
        if (char in allChar) {
            allChar[char]++;
        } else {
            allChar[char] = 1;
        }
        return allChar;
    }, {});

    const result: [string, number][] = Object.entries(map).sort((a, b) => a[1] - b[1]);
    return Number(result[0][0]);
};

const a = singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]);
console.log('a', a);
