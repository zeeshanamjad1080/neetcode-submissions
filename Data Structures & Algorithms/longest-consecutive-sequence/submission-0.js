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
            let counter = 0;
            if (numsSet.has(item - 1)) continue;
            if (!numsSet.has(item + 1)) {
                counter++;
                if (counter > result) result = counter;
                continue;
            }
            counter++;
            while (numsSet.has(item + counter)) {
                counter++;
                if (counter > result) result = counter;
            }
        }
        return result;
    }
}
