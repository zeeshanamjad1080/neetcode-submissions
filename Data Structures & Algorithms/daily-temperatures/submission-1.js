class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let output = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while(stack.length && temperatures[i] > temperatures[stack[stack.length -1]]){
                let prevIndex = stack.pop();
                output[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }

        return output;
    }
}
