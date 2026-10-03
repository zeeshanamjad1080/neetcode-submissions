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
        const indexMap = new Map();

        for (let i = 0; i < inorder.length; i++) {
            indexMap.set(inorder[i], i);
        }

        let preorderIndex = 0;

        function build(left, right) {
            if (left > right) {
                return null;
            }

            const rootValue = preorder[preorderIndex];
            preorderIndex++;

            const root = new TreeNode(rootValue);

            const inorderIndex = indexMap.get(rootValue);

            root.left = build(left, inorderIndex - 1);
            root.right = build(inorderIndex + 1, right);

            return root;
        }

        return build(0, inorder.length - 1);
    }
}
