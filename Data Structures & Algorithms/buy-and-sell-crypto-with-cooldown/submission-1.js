class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    sell

    maxProfit(prices) {
        const hold = new Array(prices.length + 2).fill(0)
        const notHold = new Array(prices.length + 2).fill(0)

        for(let i = prices.length - 1; i >= 0; i--){

            const sellWhenHold = prices[i] + notHold[i + 2]; // because we sell now for current price and endup on i + 2 due to cooldown and take max value when we do not have anything
            const keepWhenHold = hold[i + 1] // simply skip a day so out profit completely depends on day after with holding state

            const buyWhenNotHolding = -prices[i] + hold[i+1] // Because we are buying for current price and next opprotunity stcitly depend on the state where we holding something on next step

            const skipWhenNotHolding = notHold[i + 1] // simply skip a day so out profit completely depends on day after with notHolding state

            hold[i] = Math.max(sellWhenHold, keepWhenHold);

            notHold[i] = Math.max(buyWhenNotHolding, skipWhenNotHolding);
        }

        return notHold[0];

    }
}