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
    isValidBST(root) {
        function validate(node, min, max) {
            if (!node) return true;

            if (node.val <= min || node.val >= max) {
                return false;
            }

            const left = validate(node.left, min, node.val);
            const right = validate(node.right, node.val, max);

            return left && right;
        }

        return validate(root, -Infinity, Infinity);
    }
}
