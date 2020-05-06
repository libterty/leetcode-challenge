/**
 * @param {string} s
 * @return {number}
 */

interface MapObject {
    [key: string]: number;
}

export const firstUniqChar = function (s: string): number {
    const stringToArr: string[] = s.split('');

    const map: MapObject = stringToArr.reduce((allChar: MapObject, char: string) => {
        if (char in allChar) {
            allChar[char]++;
        } else {
            allChar[char] = 1;
        }
        return allChar;
    }, {});

    for (let [key, value] of Object.entries(map)) {
        if (value === 1) {
            return stringToArr.indexOf(key);
        }
    }
    return -1;
};

firstUniqChar('leetCode');
