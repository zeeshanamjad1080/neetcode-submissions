class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
        topKFrequent(nums, k) {
        const map = {}
        for (const num of nums) {
            map[num] = (map[num] || 0) + 1;
        }
        if (Object.keys(map).length == 1) return [Number(Object.keys(map))]

        const keys = Object.keys(map)
        keys.sort((a,b) => map[b] - map[a] )

        return keys.slice(0,k).map(Number)
    }
}
