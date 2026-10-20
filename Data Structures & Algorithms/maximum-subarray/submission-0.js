class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -Infinity;
        let prefixSum = 0;

        for(let num of nums){
            if(prefixSum <= 0){
                prefixSum = num;
            } else {
                prefixSum += num;
            }

            max = Math.max(max, prefixSum)
        }

        return max;
    }
}
