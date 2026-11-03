class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let memo = new Map();

        function dfs(i) {
            if (i >= nums.length) return 0;

            if (memo.has(i)) return memo.get(i);

            let result = Math.max(nums[i] + dfs(i + 2), dfs(i + 1));

            memo.set(i, result);

            return result;
        }

        return dfs(0);
    }
}
