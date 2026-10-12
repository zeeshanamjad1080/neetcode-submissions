class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0,
            right = nums.length - 1;

        while (right > left) {
            let mid = Math.floor(left + (right - left) / 2);

            if (nums[mid] === target) {
                return mid;
            } else if (target >= nums[left] && target <= nums[mid]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return -1;
    }
}
