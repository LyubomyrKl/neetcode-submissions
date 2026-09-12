class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;


        while(l <= r){
            let middleIndex = l + Math.floor((r - l) / 2);

            if(nums[middleIndex] === target){
                return middleIndex;
            }

            nums[middleIndex] < target ? l = middleIndex + 1 : r = middleIndex - 1;   
        }

        return -1
    }
}


// 1) Take an middle of subarray buy left and right indecies
// 2) if match - return match
// 3) if does not mach we check - bigger ? set start index at that place + 1, if smaller end index - 1 
// if nothing match -1