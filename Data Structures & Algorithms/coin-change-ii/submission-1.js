class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let n = coins.length;

        const dp = Array.from({length: n + 1}, () => new Array(amount + 1).fill(0))

        for(let coin = 0; coin < n; coin++) dp[coin][0] = 1; // for 0 amount for any coin possible number is 1;


        for(let coin = n - 1; coin >= 0; coin--){
            for(let a = 1; a <= amount; a++){
                const withCoin = a - coins[coin] >= 0 ? dp[coin][a - coins[coin]] : 0
                const withBiggerCoins = dp[coin + 1][a];
                dp[coin][a] = withCoin + withBiggerCoins
            }
        }

        return dp[0][amount]
    }
}
