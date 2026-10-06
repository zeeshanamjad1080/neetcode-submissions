class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        let per = [];
        let used = new Set();

        const backtrack = () => {
            if (per.length === nums.length) {
                res.push([...per]);
                return;
            }

            for (let num of nums) {
                if (used.has(num)) continue;
                per.push(num);
                used.add(num);

                backtrack();

                per.pop();
                used.delete(num);
            }
        };

        backtrack();
        return res;
    }
}
