class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map();
        let result = 0;

        let l = 0;
        let r = 0;

        let maxf = 0
        while(r < s.length){
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            maxf = Math.max(maxf, count.get(s[r])); 

            if(r - l + 1 - maxf > k){
                count.set(s[l], count.get(s[l]) - 1);
                l++
            }
            result = Math.max(result, r - l + 1);
            r++
        }

        return result
    }
}