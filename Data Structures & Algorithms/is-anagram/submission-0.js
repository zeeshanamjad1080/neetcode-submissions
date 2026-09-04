class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sobj={};
        let tobj={};

        if(s.length !== t.length){
            return false
        }

        for(let i=0; i<s.length; i++){
            if(sobj[s[i]]){
                sobj[s[i]]+=1
            }else{
                sobj[s[i]] = 1
            }

            if(tobj[t[i]]){
                tobj[t[i]]+=1
            }else{
                tobj[t[i]] = 1
            }
        }

        for(let key in sobj){
            if(sobj[key] !== tobj[key]) return false
        }

        return true
    }
}
