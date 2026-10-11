class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const dp = new Array(nums.length).fill(1);
        let maxVal = 1;

        for(let i = nums.length - 1; i >= 0; i-- ){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[j] > nums[i]){
                    dp[i] = Math.max(dp[i], 1 + dp[j])
                }

                maxVal = Math.max(maxVal, dp[i])
            }
        }
        return maxVal
    }
}


// for (let i = 1; i <= amount; i++) {
//             for (let j = 0; j < coins.length; j++) {
//                 if (coins[j] <= i) {
//                     dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
//                 }
//             }
//         }