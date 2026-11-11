class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        if (n === 1) return nums[0];

        const robRange = (start, end) => {
            const memo = new Map();

            const dfs = (i) => {
                if (i > end) return 0;
                if (memo.has(i)) return memo.get(i);

                const result = Math.max(nums[i] + dfs(i + 2), dfs(i + 1));

                memo.set(i, result);
                return result;
            };

            return dfs(start);
        };

        return Math.max(robRange(0, n - 2), robRange(1, n - 1));
    }
}