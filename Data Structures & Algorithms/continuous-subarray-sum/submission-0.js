class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        const remainder = new Map();
        remainder.set(0, -1); 

        let total = 0;

        for (let i = 0; i < nums.length; i++) {
            total += nums[i];

            let remaind = total % k;

            if(!remainder.has(remaind)){
                remainder.set(remaind, i)
            } else if(i - remainder.get(remaind) > 1) {
                return true
            }
        }

        return false
    }
}
