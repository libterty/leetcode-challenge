/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s: string, p: string) {
    let map = new Map();
    let result: number[] = [];
    let slideWindow = new Map();

    for (var i = 0; i < p.length; i++) {
        if (map.get(p[i])) {
            map.set(p[i], map.get(p[i] + 1));
        } else {
            map.set(p[i], 1);
        }
    }

    let right: number = 0;
    let left: number = 0;

    while (right < s.length) {
        if (map.get(s.charAt(right))) {
            if (slideWindow.get(s.charAt(right)) && map.get(s.charAt(right)) === 1) {
                left = Math.max(slideWindow.get(s.charAt(right)), left);
            }
            if (right - left + 1 === p.length) {
                result.push(left);
                left++;
            }
        } else {
            left = right + 1;
            slideWindow.clear();
        }
        slideWindow.set(s.charAt(right), right + 1);
        right++;
    }
    return result;
};

const ab = findAnagrams('cbaebabacd', 'abc');
const bc = findAnagrams('abab', 'ab');
console.log('ab', ab);
console.log('bc', bc);
