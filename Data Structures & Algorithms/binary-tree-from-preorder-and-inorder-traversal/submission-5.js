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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let inorderMap = new Map();

        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        let preorderIndex = 0;

        function buildBST(left, right) {
            if (left > right) return null;

            let rootValue = preorder[preorderIndex];
            preorderIndex++;

            let root = new TreeNode(rootValue);
            let inorderIndex = inorderMap.get(rootValue);

            root.left = buildBST(left, inorderIndex - 1);
            root.right = buildBST(inorderIndex + 1, right);

            return root;
        }

        return buildBST(0, inorderMap.size - 1);
    }
}
