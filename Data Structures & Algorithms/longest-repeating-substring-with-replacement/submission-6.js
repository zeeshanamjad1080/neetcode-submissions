class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {},
            result = 0,
            mostFrequent = 0,
            left = 0;

        for (let r = 0; r < s.length; r++) {
            let length = r - left + 1;
            count[s[r]] = (count[s[r]] || 0) + 1;
            mostFrequent = Math.max(mostFrequent, count[s[r]]);
            if (length - mostFrequent <= k) {
                result = Math.max(result, length);
                continue;
            } else {
                count[s[left]]--;
                left++;
                // mostFrequent = 0;
                // Object.entries(count).forEach(([_, value]) => {
                //     mostFrequent = Math.max(mostFrequent, value);
                // });
            }
        }

        return result;
    }
}
