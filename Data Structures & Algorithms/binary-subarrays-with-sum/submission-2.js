class Solution {
        /**
         * @param {number[]} nums
         * @param {number} goal
         * @return {number}
         */
        numSubarraysWithSum(nums, goal) {
                let sum = 0;
                let res = 0;

                for (let l = 0, m = 0, r = 0; r < nums.length; r++) {
                        sum += nums[r];

                        if (sum > goal) {
                                while (sum > goal && l < r) {
                                        sum -= nums[l++];
                                }

                                m = l;
                        }

                        if (sum === goal) {
                                while (nums[m] === 0 && m < r) {
                                        m++;
                                }

                                res += m - l + 1;
                        }
                }

                return res;
        };
}
