class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // let result = [];

        // for(let i=0; i<nums.length; i++){
        //     let res = 1;
        //     for(let k=0; k<nums.length; k++){
        //         if(i===k) continue;
        //         res*=nums[k];
        //     }
        //     result.push(res)
        // }

        // return result;

        let prefix = [];
        let postfix = [];
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                prefix.push(nums[i]);
            } else {
                prefix.push(prefix[i - 1] * nums[i]);
            }
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                postfix[i] = nums[i];
            } else {
                postfix[i] = postfix[i + 1] * nums[i];
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                result.push(postfix[i + 1]);
            } else if (i === nums.length - 1) {
                result.push(prefix[i-1]);
            } else {
                result.push(prefix[i - 1] * postfix[i + 1]);
            }
        }
        return result;

        // let result = [];

        // for (let i = 0; i < nums.length; i++) {
        //     if (i == 0) {
        //         result.push(1);
        //     } else if (i === 1) {
        //         result.push(nums[i - 1]);
        //     } else {
        //         result.push(result[i - 1] * nums[i - 1]);
        //     }
        // }

        // for (let i = nums.length - 1; i >= 0; i--) {
        //     if (i == nums.length - 1) {
        //         continue;
        //     }else {
        //         result[i] = (result[i] * nums[i + 1]);
        //     }
        // }

        // return result;
    }
}
