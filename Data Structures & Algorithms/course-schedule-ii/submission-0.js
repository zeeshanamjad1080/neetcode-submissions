class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let adjList = Array.from({ length: numCourses }, () => []);
        let visited = new Set();
        let result = new Set();

        for (let [course, prereq] of prerequisites) {
            adjList[course].push(prereq);
        }

        function dfs(index) {
            if (!adjList[index].length) {
                result.add(index);
                return true;
            }

            if (visited.has(index)) return false;

            visited.add(index);

            for (let items of adjList[index]) {
                let res = dfs(items);
                if (!res) {
                    return false;
                }
            }

            adjList[index] = [];
            result.add(index);
            return true;
        }

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return false;
            }
        }

        return [...result];
    }
}
