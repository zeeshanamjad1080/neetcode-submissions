class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj={};

        for(let i = 0; i< nums.length; i++){
            let diff = target - nums[i];

            if(obj[diff] >=0){
                return [obj[diff], i]
            }else{
                obj[nums[i]]=i
            }
        }
        return [];
    }
}
