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
    goodNodes(root) {
        let counter = 0;

        function traverse(node, maxTillNode) {
            if (!node) return;

            if (node.val >= maxTillNode) counter++;

            const newMax = Math.max(node.val, maxTillNode);

            traverse(node.left, newMax);
            traverse(node.right, newMax);
        }

        traverse(root, -Infinity);
        return counter;
    }
}
