
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const tFreq = {};
        const sFreq = {};

        let tSize = t.length;
        let sSize = 0;

        let left = 0;
        let minLength = Infinity;
        let startIndex = 0;

        // Step 1: Build the frequency map of t
        for (const char of t) {
            tFreq[char] = (tFreq[char] || 0) + 1;
        }

        // Step 2: Expand the window
        for (let right = 0; right < s.length; right++) {

            const char = s[right];

            sFreq[char] = (sFreq[char] || 0) + 1;

            // Count only required character occurrences
            if (
                tFreq[char] &&
                sFreq[char] <= tFreq[char]
            ) {
                sSize++;
            }

            // Step 3: Shrink while the window is valid
            while (sSize === tSize) {

                const length = right - left + 1;

                // Record the smallest valid window
                if (length < minLength) {
                    minLength = length;
                    startIndex = left;
                }

                const leftChar = s[left];

                // Remove the left character
                sFreq[leftChar]--;

                // Did we remove a required occurrence?
                if (
                    tFreq[leftChar] &&
                    sFreq[leftChar] < tFreq[leftChar]
                ) {
                    sSize--;
                }

                left++;
            }
        }

        if (minLength === Infinity) return "";

        return s.slice(startIndex, startIndex + minLength);
    }
}