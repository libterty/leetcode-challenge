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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

interface Cache {
    [key: number]: Child;
}

interface Child {
    parent?: number;
    depth: number;
}

export const isCousins = function (root, x, y): boolean {
    const cache: Cache = {};

    if (root && root.val) cache[root.val] = { parent: null, depth: 0 };

    const dfs = (node, depth: number = 1): void => {
        if (node && node.left) {
            cache[node.left.val] = { parent: node.val, depth };
            dfs(node.left, depth + 1);
        }

        if (node && node.right) {
            cache[node.right.val] = { parent: node.val, depth };
            dfs(node.right, depth + 1);
        }
    };

    if (root) dfs(root);
    else return false;

    const depthOfx: number = cache[x].depth;
    const depthOfy: number = cache[y].depth;
    const parentOfx: number = cache[x].parent;
    const parentOfy: number = cache[y].parent;

    return depthOfx === depthOfy && parentOfx !== parentOfy;
};
