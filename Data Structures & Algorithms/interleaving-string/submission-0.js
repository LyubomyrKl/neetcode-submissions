class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const n = s1.length, m = s2.length;
        if (n + m !== s3.length) return false;

    
        const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(false));
        dp[n][m] = true;                      

        for (let i = n; i >= 0; i--) {
            for (let j = m; j >= 0; j--) {
                if (i === n && j === m) continue;

                const fromS1 = i < n && s1[i] === s3[i + j] && dp[i + 1][j];
                const fromS2 = j < m && s2[j] === s3[i + j] && dp[i][j + 1];

                dp[i][j] = fromS1 || fromS2;
            }
        }

        return dp[0][0];
    }
}
