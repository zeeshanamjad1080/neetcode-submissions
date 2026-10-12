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
        if (!root) return true;
        if (root.right && root.val >= root.right.val) return false;
        if (root.left && root.val <= root.left.val) return false;

        let left = this.isValidBST(root.left);
        let right = this.isValidBST(root.right);

        return left && right;
    }
}
