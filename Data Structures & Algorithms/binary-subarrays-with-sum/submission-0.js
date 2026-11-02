class Solution {
    /**
     * @param {number[]} nums
     * @param {number} goal
     * @return {number}
     */
    numSubarraysWithSum(nums, goal) {
        const restMap = new Map()

        restMap.set(0, 1)
        let sum = 0;
        let res = 0;

        for(let i = 0; i < nums.length; i++){
            sum += nums[i];

            const rest = sum - goal;

            res += restMap.get(rest) || 0;
        
            restMap.set(sum, (restMap.get(sum) || 0) + 1 )
        }

        return res;
    }
}
