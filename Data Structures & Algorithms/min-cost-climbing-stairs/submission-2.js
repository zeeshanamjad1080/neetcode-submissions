class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        for (let i = 2; i < cost.length; i++) {
            const newCost = cost[i] + Math.min(cost[i-1], cost[i-2])
            cost[i] = newCost
        }

        return Math.min(cost[cost.length-1], cost[cost.length-2])
    }
}
