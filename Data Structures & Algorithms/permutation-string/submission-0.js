class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1Count = {};
        let sTwoWindow = {};

        for (let itms of s1) {
            s1Count[itms] = (s1Count[itms] || 0) + 1;
        }

        let l = 0;
        for (let r = 0; r < s2.length; r++) {
            sTwoWindow[s2[r]] = (sTwoWindow[s2[r]] || 0) + 1;

            if (r - l + 1 > s1.length) {
                sTwoWindow[s2[l]] = sTwoWindow[s2[l]] - 1;

                if (sTwoWindow[s2[l]] === 0) delete sTwoWindow[s2[l]];

                l++;
            }

            if (r - l + 1 === s1.length) {
                let matched = true;

                for (let keys in s1Count) {
                    if (s1Count[keys] !== sTwoWindow[keys]) {
                        matched = false;
                        break;
                    }
                }
                if (matched) return matched;
            }
        }
        return false;
    }
}
