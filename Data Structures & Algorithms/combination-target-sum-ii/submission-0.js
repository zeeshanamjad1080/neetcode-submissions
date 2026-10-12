class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = [];
        let subset = [];

        this.dfs(candidates, target, subset, result, 0);

        return result;
    }

    dfs(nums, target, subset, result, i) {
        if (target === 0) {
            result.push([...subset]);
        }

        if (target < 0 || i >= nums.length) {
            return;
        }

        subset.push(nums[i]);
        this.dfs(nums, target - nums[i], subset, result, i + 1);
        subset.pop();
        this.dfs(nums, target, subset, result, i + 1);
    }
}
