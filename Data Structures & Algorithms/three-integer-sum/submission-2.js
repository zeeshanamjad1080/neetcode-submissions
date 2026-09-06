class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sorted = nums.sort((a, b) => a - b);
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && sorted[i - 1] === sorted[i]) continue;
            let left = i + 1;
            let right = sorted.length - 1;
            while (left < right) {
                if (sorted[left] + sorted[right] === -sorted[i]) {
                    result.push([sorted[i], sorted[left], sorted[right]]);
                    left++;
                    right--;
                    while (left < right && sorted[left] === sorted[left - 1]) {
                        left++;
                    }
                    while (left < right && sorted[right] === sorted[right + 1]) {
                        right--;
                    }
                } else if (sorted[left] + sorted[right] > -sorted[i]) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return result;
    }
}
