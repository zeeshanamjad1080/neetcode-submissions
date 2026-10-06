class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const perm = [];
        const used = new Set();

        const backtrack = () => {
            if (perm.length === nums.length) {
                res.push([...perm]);
                return;
            }

            for (const num of nums) {
                if (used.has(num)) continue;

                perm.push(num);
                used.add(num);

                backtrack();

                perm.pop();
                used.delete(num);
            }
        };

        backtrack();

        return res;
    }
}
