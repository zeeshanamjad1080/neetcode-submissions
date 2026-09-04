class Solution {
    groupAnagrams(strs) {
        const groups = new Map();

        for (const str of strs) {
            const key = convertToKey(str);

            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups.get(key).push(str);
        }

        return [...groups.values()];

        function convertToKey(str) {
            const count = new Array(26).fill(0);

            for (const char of str) {
                const index =
                    char.charCodeAt(0) - 'a'.charCodeAt(0);

                count[index]++;
            }

            return count.join('#');
        }
    }
}