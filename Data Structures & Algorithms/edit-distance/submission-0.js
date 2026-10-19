class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
   minDistance(word1, word2) {
    const n = word1.length, m = word2.length;

    // dp[i][j]: min operations to turn word1 from i into word2 from j
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    for (let j = 0; j <= m; j++) dp[n][j] = m - j;   // word1 used up: insert the rest
    for (let i = 0; i <= n; i++) dp[i][m] = n - i;   // word2 used up: delete the rest

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (word1[i] === word2[j]) {
                dp[i][j] = dp[i + 1][j + 1];              // match: free, skip both
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i + 1][j],      // delete word1[i]
                    dp[i][j + 1],      // insert word2[j]
                    dp[i + 1][j + 1]   // replace word1[i] with word2[j]
                );
            }
        }
    }

    return dp[0][0];
}
}
