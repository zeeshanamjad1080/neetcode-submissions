class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        let obj = {
            "}": "{",
            "]": "[",
            ")": "(",
        };

        for (let items of s) {
            if (!obj[items]) {
                arr.push(items);
            } else if (arr[arr.length - 1] === obj[items]) {
                arr.pop();
            } else {
                return false;
            }
        }

        return arr.length === 0;
    }
}
