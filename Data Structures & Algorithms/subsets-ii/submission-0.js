class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = [];
        let subset = [];

        this.dfs(
            nums.sort((a, b) => a - b),
            result,
            subset,
            0,
        );

        return result;
    }
    dfs(nums, res, subset, index) {
        if (index >= nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[index]);

        let next = index + 1;

        this.dfs(nums, res, subset, next);

        subset.pop();

        while (next < nums.length && nums[next] === nums[index]) {
            next++;
        }
        
        this.dfs(nums, res, subset, next);
    }
}
