class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adjList = Array.from({ length: n }, () => []);
        let visit = new Set();
        let res = 0;

        for (let [m, n] of edges) {
            adjList[m].push(n);
            adjList[n].push(m);
        }

        function dfs(node, parent) {
            visit.add(node);
            for (let nei of adjList[node]) {
                if (!visit.has(nei)) dfs(nei, parent);
            }
        }

        for (let node = 0; node < n; node++) {
            if (!visit.has(node)) {
                res++;
                dfs(node);
            }
        }

        return res;
    }
}
