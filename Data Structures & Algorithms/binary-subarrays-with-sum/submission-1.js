class Solution {
    /**
     * @param {number[]} nums
     * @param {number} goal
     * @return {number}
     */
    numSubarraysWithSum(nums, goal) {
      const helper = (x) => {
            if (x < 0) return 0;
            let res = 0, l = 0, cur = 0;
            for (let r = 0; r < nums.length; r++) {
                cur += nums[r];
                while (cur > x) {
                    cur -= nums[l];
                    l++;
                }
                res += r - l + 1;
            }
            return res;
        };
        return helper(goal) - helper(goal - 1);  
    }
}
