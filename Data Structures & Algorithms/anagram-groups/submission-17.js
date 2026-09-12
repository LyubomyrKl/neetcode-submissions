class Solution {

    groupAnagrams(strs) {
        const map = new Map();
        
        for(let i = 0; i < strs.length; i++){
            const word = strs[i];
            const codeArray = new Array(26).fill(0)


            for(let j = 0; j < word.length; j++){
                codeArray[word.charCodeAt(j) - 97 ]++
            }

            const code = codeArray.join('-');

            if(!map.has(code)) map.set(code, []);
            map.get(code).push(word)
        }

        return Array.from(map.values());
  
    }

}