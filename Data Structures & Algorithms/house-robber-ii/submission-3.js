class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        return Math.max(
            this.robLine(nums, 1, nums.length - 1),
            this.robLine(nums, 0, nums.length - 2)
        );
    }

    robLine(nums, start, end) {
        let next = 0, afterNext = 0;
        for (let i = end; i >= start; i--) {
            const temp = next;
            next = Math.max(nums[i] + afterNext, next);
            afterNext = temp;
        }
        return next;
    }
}
