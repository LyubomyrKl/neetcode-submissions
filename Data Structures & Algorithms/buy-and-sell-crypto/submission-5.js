class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let stonks = 0;

        let l = 0;
        let r = 1;

        while (r < prices.length){
            if(prices[r] - prices[l] < 0){
                l = r
                r++
                continue;
            }

            stonks = Math.max(stonks, prices[r] - prices[l])
            r++

        }

        return stonks;
    }
}