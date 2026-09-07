class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let result = 0;

        while (left < right) {
            let waterCapacity = (right - left) * Math.min(heights[left], heights[right]);
            result = Math.max(result, waterCapacity);
            if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }
        return result;
    }
}
