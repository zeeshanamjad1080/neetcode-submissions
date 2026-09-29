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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function traverse(node, subRoot) {
            if (!node || !subRoot) return false;
            if (node.val === subRoot.val && equalTree(node, subRoot)) return true;

            let left = traverse(node.left, subRoot);
            let right = traverse(node.right, subRoot);

            return left || right;
        }

        function equalTree(a, b) {
            if (!a && !b) return true;
            if (!a || !b || a.val !== b.val) return false;

            let left = equalTree(a.left, b.left);
            let right = equalTree(a.right, b.right);

            return left && right;
        }

        return traverse(root, subRoot);
    }
}
