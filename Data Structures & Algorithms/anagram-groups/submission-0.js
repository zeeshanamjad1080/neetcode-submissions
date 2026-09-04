class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let resultMap = new Map();
        for (let items of strs) {
            console.log([...items].sort().join(""))
            let sorted = [...items].sort().join("");
            if (resultMap.has(sorted)) {
                resultMap.set(sorted, [items, ...resultMap.get(sorted)]);
            } else {
                resultMap.set([...items].sort().join(""), [items]);
            }
        }
        return [...resultMap.values()];
    }
}
