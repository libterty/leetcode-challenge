/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function (s1: string, s2: string): boolean {
    const len1: number = s1.length;
    const len2: number = s2.length;

    if (len1 > len2) return false;
    let alphas = Array.from({ length: 26 }, (x) => 0);
    let begin = 'a'.charCodeAt(0);
    for (let a of s1) alphas[a.charCodeAt(0) - begin]++;

    let len = s1.length;
    let count = Array.from({ length: 26 }, (x) => 0);
    //initialize count
    for (let i = 0; i < len; i++) {
        count[s2[i].charCodeAt(0) - begin]++;
    }

    //sliding window
    for (let i = len; i <= s2.length; i++) {
        let fit = true;
        for (let i = 0; i < 26; i++) {
            if (count[i] !== alphas[i]) {
                fit = false;
                break;
            }
        }
        if (fit) return true;
        if (i === s2.length) return false;
        //update count
        count[s2[i - len].charCodeAt(0) - begin]--;
        count[s2[i].charCodeAt(0) - begin]++;
    }
};

const cd = checkInclusion('ab', 'eidbaooo');
const de = checkInclusion('abc', 'ccccbbbbaaaa');
console.log('cd', cd);
console.log('de', de);
