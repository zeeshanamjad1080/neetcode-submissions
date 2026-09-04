class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sObj = {};
        let tObj = {};

        if (s.length !== t.length) return false;

        for (let i=0; i < s.length; i++) {
            if (sObj[s[i]]) {
                sObj[s[i]] += 1;
            } else {
                sObj[s[i]] = 1;
            }
            if (tObj[t[i]]) {
                tObj[t[i]] += 1;
            } else {
                tObj[t[i]] = 1;
            }
        }

        for (let key in sObj) {
            if (sObj[key] !== tObj[key]) return false;
        }

        return true;
    }
}
