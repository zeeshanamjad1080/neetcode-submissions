class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let curr = [];
        this.backTrack(nums, target, curr, res, 0);
        return res;
    }

    backTrack(nums, target, curr, ans, index) {
        if (target === 0) {
            ans.push([...curr]);
        } else if (target < 0 || index >= nums.length) {
            return;
        } else {
            curr.push(nums[index]);
            this.backTrack(nums, target - nums[index], curr, ans, index);
            curr.pop();
            this.backTrack(nums, target, curr, ans, index + 1);
        }
    }
}
