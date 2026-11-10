class Solution {
    /**
     * @param {number[]} nums
     * @param {number} x
     * @return {number}
     */
    // O(n) / O (1);
    minOperations(nums, x) {
        const total = nums.reduce((sum, v) => sum + v, 0);
        
        let longest = -1;

        let target = total - x;
            
        if (target < 0) return -1;  
        
        let l = 0;
        let r = 0;
        let windowSum = 0;

        while(r < nums.length){
            windowSum += nums[r];

            while(windowSum > target){
                windowSum -= nums[l];
                l++
            }

            if(windowSum === target){
                longest = Math.max(longest, r - l + 1);
            }

            r++     
        }

        return longest === - 1 ? -1 : nums.length - longest;
    };
}
