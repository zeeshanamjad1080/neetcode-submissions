class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;
        let stack = [];

        for (let i = 0; i < heights.length; i++) {
            if (!stack.length || heights[i] >= stack[stack.length - 1].height) {
                stack.push({
                    index: i,
                    height: heights[i],
                });
            } else {
                let startindex = i;
                while (stack[stack.length - 1] && stack[stack.length - 1].height > heights[i]) {
                    let data = stack.pop();
                    let area = (i - data.index) * data.height;

                    max = Math.max(max, area);
                    startindex = data.index;
                }

                stack.push({
                    index: startindex,
                    height: heights[i],
                });
            }
        }

        while (stack[stack.length - 1]) {
            let data = stack.pop();
            let area = (heights.length - data.index) * data.height;
            max = Math.max(max, area);
        }

        return max;
    }
}
