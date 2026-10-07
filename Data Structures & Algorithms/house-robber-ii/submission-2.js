class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

            if(nums.length === 1) return nums[0];
        return Math.max(this.fn(nums.slice(1)), this.fn(nums.slice(0, nums.length - 1)))
    }


    fn(nums) {
        let next = 0;
        let afterNext = 0;

        for(let i = nums.length - 1; i >= 0; i--){
            const temp = next;
            next = Math.max(nums[i] + afterNext, next)
            afterNext = temp;
        }

        return next;
    }
}
