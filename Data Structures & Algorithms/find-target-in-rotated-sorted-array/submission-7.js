class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
   search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            if(nums[mid] === target) return mid;

            // left hand side is sorted
            if(nums[mid] >= nums[l]){
                if(nums[l] <= target && target <= nums[mid]){
                    r = mid - 1;
                } else {
                    l = mid + 1
                }
            } 
            // right hand side is sorted
            else {
                if(nums[mid] <= target &&  target <= nums[r]){
                    l = mid + 1;
                } else {
                    r = mid - 1
                }
            }

            
        }

        return -1;
    }
}
