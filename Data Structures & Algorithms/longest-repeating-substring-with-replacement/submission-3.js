class Solution {

    characterReplacement(s, k) {
       let count = new Map().set(s[0], 1)

       let l = 0;
       let r = 1;
       let maxf = 1;

       let longest = 1;

       while (r < s.length){
        count.set(s[r], ( count.get(s[r]) || 0 ) + 1)
        maxf = Math.max(maxf, count.get(s[r]))
        
        if(r - l + 1 - maxf > k){
            count.set(s[l], count.get(s[l]) - 1);
            l++
        }

        longest = Math.max(longest, r - l + 1);
        r++
       }  

       return longest;

    }
}