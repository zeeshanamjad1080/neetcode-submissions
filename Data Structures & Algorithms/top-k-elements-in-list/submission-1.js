class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let occurance = {};
        let result = [];

        for (let items of nums) {
            if (occurance[items]) {
                occurance[items]++;
            } else {
                occurance[items] = 1;
            }
        }

        const bucket = Array.from({ length: nums.length + 1 }, () => []);

        for (const key in occurance) {
            bucket[occurance[key]].push(Number(key));
        }

        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i].length) {
                if (bucket[i].length > 1) {
                    for (let itm of bucket[i]) {
                        result.push(itm);
                        if (result.length === k) break;
                    }
                }else{
                result.push(...bucket[i]);
                if (result.length === k) break;
                }
            }
        }

        return result;
    }
}
