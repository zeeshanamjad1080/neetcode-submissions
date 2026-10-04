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
     * @return {number}
     */
    maxPathSum(root) {
        let maxRes = -Infinity;

        function traverseTree(node) {
            if (!node) return 0;

            let left = Math.max(0,traverseTree(node.left));
            let right = Math.max(0,traverseTree(node.right));

            let nodeMax = node.val + left + right;

            maxRes = Math.max(nodeMax, maxRes);

            return Math.max(nodeMax - left, nodeMax - right);
        }

        traverseTree(root);

        return maxRes;
    }
}
