/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
export const solution = function (isBadVersion): ReturnType<typeof isBadVersion> {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n: number): number {
        let i: number = 1,
            j: number = n;

        while (i < j) {
            let k: number = Math.floor((i + j) / 2);
            if (isBadVersion(k)) j = k;
            else i = k + 1;
        }

        return i;
    };
};
