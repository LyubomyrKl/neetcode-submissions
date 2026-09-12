class Solution {
     twoSum(nums, target) {
       const valuesMap = new Map()

       for(let i = 0; i < nums.length; i++){
        const difference = target - nums[i];

        if(valuesMap.has(nums[i])){
            return [valuesMap.get(nums[i]), i]
        }
        
        valuesMap.set(difference, i)
       }
    }
}

// [1, 2, 3, 4], 7