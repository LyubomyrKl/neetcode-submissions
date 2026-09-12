class Solution {
    // Fails if wordPlusArray[currentWord.charCodeAt(j) - 97]++ does is 0 <= charCodeAt(j) <= 25

    groupAnagrams(strs) {
        const annagramsMap = new Map();

        for(let i = 0; i < strs.length; i++){
            const currentWord = strs[i];
            const wordPlusArray = new Array(26).fill(0);

            for(let j = 0; j < currentWord.length; j++){
                wordPlusArray[currentWord.charCodeAt(j) - 97]++;
            }
                
            const plusWordKey = wordPlusArray.join('#');

            annagramsMap.set(plusWordKey, annagramsMap.has(plusWordKey) ? [...annagramsMap.get(plusWordKey), currentWord] : [currentWord])
        }

        return Array.from(annagramsMap.values()); // do not know complexity of this, could use object instead, to have just .values() => value[]
    }

}