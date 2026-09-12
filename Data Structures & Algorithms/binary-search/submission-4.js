class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1; 

        while (l <= r){
            const middleIndex = l + Math.floor((r - l) / 2)
            const middleValue = nums[middleIndex];

            if(middleValue === target) return middleIndex;

            middleValue > target ? r = middleIndex - 1 : l = middleIndex + 1
            
        }

        return -1; 
    }
}
