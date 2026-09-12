class Solution {
    isAnagram(s, t) {
        const sMap = new Map()
        const tMap = new Map()

        if(s.length !== t.length){
            return false
        }
        
        for (let i = 0; i < t.length; i++){
            const tMapValue = tMap.get(t[i]) || 0
            tMap.set(t[i], tMapValue+1)

            const sMapValue = sMap.get(s[i]) || 0
            sMap.set(s[i], sMapValue+1)
           
        }


        for(let [tMapKey, tMapValue] of tMap){
           const sMapKey = sMap.has(tMapKey);
           const sMapValue = sMap.get(tMapKey)
      
            if(!sMapKey){
                return false
            }
            if(sMapValue !== tMapValue){
                return false
            } 
        }

        return true
    }
}
