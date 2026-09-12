class Solution {
    // Fails if wordPlusArray[currentWord.charCodeAt(j) - 97]++ does is 0 <= charCodeAt(j) <= 25

    groupAnagrams(strs) {
        const map = new Map();

        for(let i = 0; i < strs.length; i++){
            const word = strs[i];
            const array = new Array(26).fill(0);

            for(let j = 0; j < word.length; j++){
                array[word.charCodeAt(j) - 97]++;
            }
                
            const key = array.join('#');

            if (!map.has(key)) map.set(key, []);
            map.get(key).push(word);
        }

        return Array.from(map.values()); // do not know complexity of this, could use object instead, to have just .values() => value[]
    }

}