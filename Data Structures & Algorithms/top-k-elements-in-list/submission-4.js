class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        const result = [];

        for(let num of nums){
            obj[num]= (obj[num] || 0) + 1
        }

        for(let key of Object.keys(obj)){
            if(obj[key] >= k) result.push(key)
        }

        return result;
    }
}
