class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sol = new Map

        for (let i=0; i < nums.length; i++) {
            let complement = target - nums[i]

            if (sol.has(complement)) return [sol.get(complement), i]

            sol.set(nums[i], i)
        }
    }
}
