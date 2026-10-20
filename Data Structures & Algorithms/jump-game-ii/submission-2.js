class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
    let jumps = 0, windowEnd = 0, farthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);   // how far this window can reach
        if (i === windowEnd) {                         // finished scanning the current window
            jumps++;
            windowEnd = farthest;                      // next window ends here
        }
    }
    return jumps;
}
}


