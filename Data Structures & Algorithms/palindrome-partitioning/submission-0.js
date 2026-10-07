class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result = [];
        let current = [];

        const backtrack = (start) => {
            if (start === s.length) {
                result.push([...current]);
                return;
            }
            for (let i = start; i < s.length; i++) {
                let string = s.slice(start, i + 1);
                if (!this.isplndrm(string)) continue;

                current.push(string);
                backtrack(i + 1);
                current.pop();
            }
        }

        backtrack(0);

        return result;
    }

    isplndrm(s) {
        let l = 0;
        let r = s.length - 1;

        while (r > l) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }

        return true;
    }
}
