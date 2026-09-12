class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) return 0

        let l = 0;
        let r = 1;
        
        let len = 1;
        let longestSetOfLetters = new Set().add(s[l])

        while(r < s.length){
            if(!longestSetOfLetters.has(s[r])){
                longestSetOfLetters.add(s[r]);
                len = Math.max(len, longestSetOfLetters.size)
                r++
            } else {
                longestSetOfLetters.delete(s[l])
                l++
            }

        }

        return len;
    }
}


