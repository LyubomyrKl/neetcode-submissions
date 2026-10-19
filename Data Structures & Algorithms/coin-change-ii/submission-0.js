class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const n = coins.length;
        const dp = Array.from({ length: n + 1 }, () => new Array(amount + 1).fill(0));
        
        for (let i = 0; i <= n; i++) dp[i][0] = 1;

        for (let i = n - 1; i >= 0; i--) {
            for (let a = 1; a <= amount; a++) {
                const use = a - coins[i] >= 0 ? dp[i][a - coins[i]] : 0;
                const skip = dp[i + 1][a];
                dp[i][a] = use + skip;
            }
        }

        return dp[0][amount];
    }
}
