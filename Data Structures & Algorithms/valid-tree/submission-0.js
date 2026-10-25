class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) {
            return false;
        }
        let adjList = Array.from({ length: n }, () => []);
        let visited = new Set();

        for (let [u, v] of edges) {
            adjList[u].push(v);
            adjList[v].push(u);
        }

        function dfs(node, parent) {
            if (visited.has(node)) return false;
            visited.add(node);
            for (let nei of adjList[node]) {
                if (nei === parent) continue;

                if (visited.has(nei)) return false;

                if (!dfs(nei, node)) {
                    return false;
                }
            }
            return true;
        }

        return dfs(0, -1) && visited.size === n;
    }
}
