class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let itms of strs) {
            encoded = encoded + (itms.length + "#" + itms);
        }
        console.log(encoded);
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];

        let i = 0;

        while (i < str.length) {
            // Find the delimiter
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            // Get length
            const length = Number(str.slice(i, j));

            // Start of actual string
            const start = j + 1;

            // Extract string
            decoded.push(str.slice(start, start + length));

            // Move to next encoded string
            i = start + length;
        }

        return decoded;
    }
}
