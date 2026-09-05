class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // let prefix = [];
        // let postfix = [];
        // let result = [];

        // for (let i = 0; i < nums.length; i++) {
        //     if (i === 0) {
        //         prefix.push(nums[i]);
        //     } else {
        //         prefix.push(prefix[i - 1] * nums[i]);
        //     }
        // }
        // for (let i = nums.length - 1; i >= 0; i--) {
        //     if (i === nums.length - 1) {
        //         postfix[i] = nums[i];
        //     } else {
        //         postfix[i] = postfix[i + 1] * nums[i];
        //     }
        // }

        // for (let i = 0; i < nums.length; i++) {
        //     if (i === 0) {
        //         result.push(postfix[i + 1]);
        //     } else if (i === nums.length - 1) {
        //         result.push(prefix[i-1]);
        //     } else {
        //         result.push(prefix[i - 1] * postfix[i + 1]);
        //     }
        // }
        // return result;

        let result = [];

        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        let postfix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i];
        }

        return result;
    }
}
