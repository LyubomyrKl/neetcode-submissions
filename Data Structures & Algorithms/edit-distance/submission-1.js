class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */

    // delete 'h'    →  "orse"  vs "ros"   word1 moved on, word2 stays
    // insert 'r'    →  "horse" vs "os"    word1 stays, word2 moved on
    // replace h→r   →  "orse"  vs "os"    both moved on
    // match         →  both moved on, for free

   minDistance(word1, word2) {
        const n = word1.length, 
              m = word2.length;
        
        const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

        for(let i = 0; i <=m; i++) dp[n][i] = m - i
        for(let j = 0; j <= n; j++) dp[j][m] = n - j

       
        for(let i = n - 1; i >= 0; i--){
            for(let j = m - 1; j >=0; j--){
                if(word1[i] === word2[j]){
                    dp[i][j] = dp[i + 1][j + 1];
                    continue;
                }

                dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);
            }
        }

        return dp[0][0]
    }
}
