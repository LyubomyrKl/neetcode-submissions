class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const max_profit = prices.map((val, idx, arr)=>  Math.max(...arr.slice(idx+1)) - val);
        return Math.max(...max_profit,0)
    }
}
