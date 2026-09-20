class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let maxlength = 0;
        let start = 0;

        for (let i = 0; i < s.length; i++) {
            if (set.has(s[i])) {
                while (set.has(s[i])) {
                    set.delete(s[start]);
                    start++;
                }
                i--;
            } else {
                let length = i - start + 1;
                set.add(s[i]);
                maxlength = Math.max(maxlength, length);
            }
        }

        return maxlength;
    }
}
