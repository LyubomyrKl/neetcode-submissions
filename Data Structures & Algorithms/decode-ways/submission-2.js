class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let nextItemWays = 1;
        let afterNextItemWays = 0;

        for(let i = s.length-1; i >= 0; i--){
            let curr;

            if(s[i] === '0'){
                curr = 0;
            } else {
                curr = nextItemWays;  // take 1 digit
                if (i + 1 < s.length &&
                    (s[i] === '1' || (s[i] === '2' && s[i + 1] < '7'))) {
                    curr += afterNextItemWays; // take 2 digits
                }
            }

            afterNextItemWays = nextItemWays;
            nextItemWays = curr;
        }

        return nextItemWays
    }
}




1210