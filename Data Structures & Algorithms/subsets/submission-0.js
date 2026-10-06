class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];
        let subSet = [];
        this.dfs(nums,0,subSet,res);
        return res;
    }

    dfs(nums, i, subSet, res) {
        if (i >= nums.length) {
            res.push([...subSet]);
            return;
        }

        subSet.push(nums[i]);
        this.dfs(nums, i + 1, subSet, res);
        subSet.pop();
        this.dfs(nums, i + 1, subSet, res);
    }
}
