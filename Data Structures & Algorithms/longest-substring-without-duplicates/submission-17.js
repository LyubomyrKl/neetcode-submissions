class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) return 0;
        let l = 0;
        let r = 1;

        let len = 1;
        const set = new Set().add(s[l])

        while(r < s.length){
            if(set.has(s[r])){
                set.delete(s[l])
                l++
            } else {
                set.add(s[r])
                len = Math.max(len, set.size)
                r++
            }
        }

        return len;
    }
}

