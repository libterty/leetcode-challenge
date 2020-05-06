/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
type CharObject = {
    [key: string]: number;
};

const mapping = function (str: string): CharObject {
    return str.split('').reduce(function (chars, char) {
        if (char in chars) chars[char]++;
        else chars[char] = 1;
        return chars;
    }, {});
};

export const canConstruct = function (ransomNote: string, magazine: string): boolean {
    if (!ransomNote && !magazine) return false;
    const magazineMapping: CharObject = mapping(magazine);
    const ransomNoteMapping: CharObject = mapping(ransomNote);
    const ransomeNoteKeys: Array<string> = Object.keys(ransomNoteMapping);
    let result: boolean = true;

    ransomeNoteKeys.forEach((key: string): void => {
        if (!magazineMapping[key]) {
            result = false;
        } else {
            if (magazineMapping[key] < ransomNoteMapping[key]) result = false;
        }
    });

    return result;
};

const test = canConstruct('fffbfg', 'effjfggbffjdgbjjhhdegh');
const test1 = canConstruct('a', 'b');
console.log('test', test);
console.log('test1', test1);
