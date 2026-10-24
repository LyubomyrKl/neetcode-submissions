class Solution {
    /**
     * @param {character[][]} matrix
     * @return {number}
     */
    maximalSquare(matrix) {
        const m = matrix.length,
            n = matrix[0].length;
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
        let maxSquare = 0;

        for (let r = m - 1; r >= 0; r--) {
            for (let c = n - 1; c >= 0; c--) {
                if (matrix[r][c] === '1') {
                    dp[r][c] =
                        1 +
                        Math.min(dp[r + 1][c], dp[r][c + 1], dp[r + 1][c + 1]);
                        
                    maxSquare = Math.max(maxSquare, dp[r][c]);
                }
            }
        }

        return maxSquare * maxSquare;
    }
}