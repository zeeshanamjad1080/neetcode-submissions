class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = new Map();
        let result = [];
        
        for(let items of strs){
            let key = convertToKey(items);
            if(groups.has(key)){
                groups.set(key, [items, ...groups.get(key)])
            }else{
                groups.set(key, [items])
            }
        }

        function convertToKey(str){
            let alphaArray = new Array(26).fill(0);

            for(let char of str){
                let indx = char.charCodeAt(0) - 'a'.charCodeAt(0);
                alphaArray[indx]+=1;
            }

            return alphaArray.join('#');
        }
        for(let items of groups.values()){
            result.push(items)
        }
        return result;
    }
}
