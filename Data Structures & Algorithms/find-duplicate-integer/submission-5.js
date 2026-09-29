class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let fast = 0;
        let slow = 0; 

        while(true){
            fast = nums[nums[fast]];
            slow = nums[slow]

            if(slow === fast) break
        }

        let slow2 = 0;

        while(slow !== slow2){
            slow = nums[slow];
            slow2 = nums[slow2];
        }

        return slow
    }
}


