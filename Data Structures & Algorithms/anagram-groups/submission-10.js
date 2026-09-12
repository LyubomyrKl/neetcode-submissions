class Solution {

    groupAnagrams(strs) {
        const map = new Map();
        

        for(let i = 0; i < strs.length; i++){
            const word = strs[i];
            const asciiCodeArray = new Array(26).fill(0)    

            for(let j = 0; j < word.length; j++){
                asciiCodeArray[word.charCodeAt(j) - 97]++
            }

            const asciiCodeMap = asciiCodeArray.join('/')

            if(!map.has(asciiCodeMap)) map.set(asciiCodeMap, [])

            map.get(asciiCodeMap).push(word)
        }

        return Array.from(map.values())
       
    }

}