class Solution {
    twoSum(nums, target) {
     
        const restMap = new Map();

        for (let i = 0; i < nums.length; i++){
            if(restMap.has(nums[i])) return [restMap.get(nums[i]), i]

            restMap.set(target-nums[i], i)
        }

        return[]


    }
}

