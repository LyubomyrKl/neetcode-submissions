class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let nextItemWays = 1;
        let afterNextItemWays = 0;

        for(let i = s.length-1; i >= 0; i--){
            const temp = nextItemWays;

            let waysToSplitCurrentValue = 0;

            if(s[i] !== '0') waysToSplitCurrentValue += nextItemWays;

            if(s[i+1] && ((s[i] === '1' && Number(s[i+1]) <= 9) || s[i] === '2' && Number(s[i+1]) <= 6)){
                waysToSplitCurrentValue += afterNextItemWays;
            }

            nextItemWays = waysToSplitCurrentValue;
            afterNextItemWays = temp;
        }

        return nextItemWays;
    }
}