class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};

        for(let num of nums){
            obj[num]= (obj[num] || 0) + 1
        }

        let keys = Object.keys(obj).sort((a, b)=> obj[b]-obj[a]);

        return keys.slice(0,k)
    }
}
