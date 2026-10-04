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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let values = [];

        function dfs(node){
            if(!node){
                values.push('N');
                return;
            }

            values.push(String(node.val));

            dfs(node.left);
            dfs(node.right);
        }

        dfs(root)

        return values.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let splitData = data.split(",");
        let index = 0;

        function dfs(){
            if(splitData[index] === 'N'){
                index++;
                return null;
            }

            const node = new TreeNode(Number(splitData[index]));
            index++;

            node.left = dfs();
            node.right = dfs();

            return node;
        }

        return dfs();
    }
}
