class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return [];
        
        let obj = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };
        let result = [];
        let curr = [];

        function backtrack(index) {
            if (index === digits.length) {
                result.push(curr.join(""));
                return;
            }

            let char = obj[digits[index]];

            for (let items of char) {
                curr.push(items);
                backtrack(index + 1);
                curr.pop();
            }
        }

        backtrack(0);
        return result;
    }
}
