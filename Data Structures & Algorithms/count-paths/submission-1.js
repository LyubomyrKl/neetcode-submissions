class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({length: m}, () => new Array(n).fill(Infinity));
        
        dp[m-1][n-1] = 1;

        for(let r = m - 1; r >= 0; r--){
            for(let c = n - 1; c >=0; c--){
                if (r === m - 1 && c === n - 1) continue;

                const bottomWays = r < m - 1 ? dp[r + 1][c] : 0;
                const rightWays = c < n - 1 ? dp[r][c + 1] : 0;

                dp[r][c] = bottomWays + rightWays;
            }
        }

        return dp[0][0]
        
    }
}
