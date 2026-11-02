
class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let memo = new Map();

        const dfs = (i) => {
            if (i >= cost.length) {
                return 0;
            }

            if (memo.has(i)) {
                return memo.get(i);
            }

            let result = cost[i] + Math.min(
                dfs(i + 1),
                dfs(i + 2)
            );

            memo.set(i, result);

            return result;
        };

        return Math.min(dfs(0), dfs(1));
    }
}
