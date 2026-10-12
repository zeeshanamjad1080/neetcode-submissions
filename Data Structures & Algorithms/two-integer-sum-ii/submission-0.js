class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        for (let i = 0; i <= right; i++) {
            left = i;
            while (right >= left) {
                if (numbers[left] === numbers[right]) continue;
                if (numbers[left] + numbers[right] === target) return [left + 1, right + 1];
                right -= 1;
            }
            right = numbers.length - 1;
        }
    }
}
