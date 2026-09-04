class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicate= new Set();

        for(let items of nums){
            if(duplicate.has(items)){
                
                return true;
            }else{
                duplicate.add(items)
            }
        }
        return false;
    }
}
