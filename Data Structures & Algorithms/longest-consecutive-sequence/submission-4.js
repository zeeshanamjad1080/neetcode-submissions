class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums);
        let result = 0;
        console.log(numsSet);

        for (let item of nums) {
            if (!numsSet.has(item - 1)) {
                let counter = 1;
                while (numsSet.has(item + counter)) {
                    counter++;
                }
                result = Math.max(result, counter);
            }
        }
        return result;
    }
}
