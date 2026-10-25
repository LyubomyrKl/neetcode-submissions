class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
         const dp = new Array(n + 1).fill(0);

        for(let i = 1; i <= n; i++ ){
            let currentMin = 1000000;

            let j = 1;

            while(j * j <= i){
                currentMin = Math.min(currentMin, dp[i - j * j])
                j++;
            }

            dp[i] = 1 + currentMin;
        }

        return dp[n];
        }
}
