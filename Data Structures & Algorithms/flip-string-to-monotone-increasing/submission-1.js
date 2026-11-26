class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minFlipsMonoIncr(s) {
        let res = 0;
        let cntOnes = 0;

        for(let char of s){
            if(char === '1') {
                cntOnes++
            } else {
                res = Math.min(res + 1, cntOnes)
            }
        }

        return res;
    }
}
