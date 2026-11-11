class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let jumps = 0;
        let windowEnd = 0;
        let furthest = 0;

        for(let i = 0; i < nums.length-1; i++){
            furthest = Math.max(furthest, i + nums[i]);

            if (i === windowEnd) {
                jumps++;
                windowEnd = furthest;
            }
        }

        return jumps
    }
}


