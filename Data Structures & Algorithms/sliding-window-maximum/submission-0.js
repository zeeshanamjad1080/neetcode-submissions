class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [],
            l = 0;

        for (let r = 0; r < nums.length; r++) {
            let length = r - l + 1;
            if (length === k) {
                result.push(Math.max(...nums.slice(l, r + 1)));
                l++;
            }
        }

        return result;
    }
}
