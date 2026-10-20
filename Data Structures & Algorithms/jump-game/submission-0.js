class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let idxToJump = nums.length - 1; 

        nums[nums.length - 1] = true;

        for(let i = nums.length - 2; i >= 0; i--){
            if(idxToJump - i <= nums[i]){
                nums[i] = true;
                idxToJump = i;
            } else {
                nums[i] = false;
            }
        }

        console.log(nums)

        return nums[0]
    }
}
