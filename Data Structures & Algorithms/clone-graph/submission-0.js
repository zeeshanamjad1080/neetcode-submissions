/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let map = new Map();
        function dfs(currNode) {
            if (!currNode) return null;
            if (map.has(currNode.val)) return map.get(currNode.val);
            let newNode = new Node(currNode.val, []);
            map.set(currNode.val, newNode);

            for (let nei of currNode.neighbors) {
                newNode.neighbors.push(dfs(nei));
            }

            return newNode;
        }

        return dfs(node);
    }
}
