class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let sections = [];
        let stack = [];

        position.forEach((pos, i) => {
            sections.push([pos, speed[i]]);
        });

        let sorted = sections.sort((a, b) => a[0] - b[0]);

        let times = sorted.map((value) => (target - value[0]) / value[1]);

        for (let time of times) {
            if (!stack[stack.length - 1] || time < stack[stack.length - 1]) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
