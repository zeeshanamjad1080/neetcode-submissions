class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = 0;
        for (let i = 0; i < height.length; i++) {
            let left = i - 1;
            let right = i + 1;
            let maxL = 0;
            let maxR = 0;
            if (left < 0 || right >= height.length) continue;

            while (left >= 1) {
                maxL = Math.max(maxL, height[left]);
                left--;
            }
            while (right < height.length) {
                maxR = Math.max(maxR, height[right]);
                right++;
            }

            if (maxL > height[i] && maxR > height[i]) {
                let cap = Math.min(maxL, maxR) - height[i];
                result = result + cap;
            }
        }
        return result;
    }
}
