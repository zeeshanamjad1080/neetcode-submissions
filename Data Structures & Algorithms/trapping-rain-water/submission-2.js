class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = 0;
        let maxLeft = [];
        let maxRight = [];

        for (let i = 0; i < height.length; i++) {
            if (i === 0) {
                maxLeft.push(0);
            } else {
                maxLeft.push(Math.max(maxLeft[i - 1], height[i-1]));
            }
        }
        for (let i = height.length - 1; i >= 0; i--) {
            if (i === height.length - 1) {
                maxRight[i] = 0;
            } else {
                maxRight[i] = Math.max(height[i + 1], maxRight[i + 1]);
            }
        }
        for (let i = 0; i < height.length; i++) {
            let min = Math.min(maxLeft[i], maxRight[i]);

            if (min - height[i] > 0) {
                result = result + min - height[i];
            }
        }
        return result;
    }
}
