class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        let current = [];

        function backtrack(open, close) {
            if (open === n && close === n) {
                result.push(current.join(""));
                return;
            }
            if (open < n) {
                current.push("(");
                backtrack(open + 1, close);
                current.pop();
            }
            if (close < open) {
                current.push(")");
                backtrack(open, close + 1);
                current.pop();
            }
        }

        backtrack(0, 0);

        return result;
    }
}
