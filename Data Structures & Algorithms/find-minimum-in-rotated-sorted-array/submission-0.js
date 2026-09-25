class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0,
            right = nums.length - 1;

        while (right > left) {
            let mid = Math.floor(left + (right - left) / 2);

            if (nums[right] < nums[mid]) {
                left = mid+ 1;
            } else {
                right = mid;
            }
        }

        return nums[left];
    }
}
