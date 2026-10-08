class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const fewest = new Array(amount + 1).fill(Infinity);

        fewest[0] = 0;
        
        
        for(let a = 1; a <= amount; a++){
            let min = Infinity;

            coins.forEach(coin => {
                if(coin <= a){
                    min = Math.min(min, fewest[a - coin])
                }
            })

            fewest[a] = 1 + min
        }

        return fewest[amount] === Infinity ? -1 : fewest[amount];
    }
}
