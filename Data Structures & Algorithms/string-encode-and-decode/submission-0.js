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
        for (let i = 0; i < str.length; i++) {
            console.log(i, str[i + 2], parseInt(str[i]) + i);
            if (!Number.isNaN(str[i]) && str[i + 1] === "#") {
                decoded.push(str.slice(i + 2, parseInt(str[i]) + 2 + i));
                i = parseInt(str[i]) + i + 1;
            }
        }
        console.log(decoded);
        return decoded;
    }
}
