/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let result = [];
    kHelper(root);
    return result[k - 1];

    function kHelper(node) {
        if (!node) return;

        if (result.length >= k) return;
        kHelper(node.left);

        if (result.length >= k) return;
        result.push(node.val);
        kHelper(node.right);
    }
};
