/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        const height = (node) => {
            if (!node) return 0;

            let left = height(node.left);
            let right = height(node.right);

            if (Math.abs(left - right) > 1 || left === -1 || right === -1) return -1;

            return Math.max(left, right) + 1;
        };

        return height(root) !== -1;
    }
}
