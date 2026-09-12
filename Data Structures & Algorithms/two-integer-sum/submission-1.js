class Solution {
     twoSum(nums, target) {
        const map = new Map()

        for(let i = 0; i < nums.length; i++){
            const number = nums[i];

            if(map.has(number)){
                return [map.get(number),i]
            }

            map.set(target - number, i)
        }
    
    }
}

// [1, 2, 3, 4], 7
// [1, 2, 3, 4], 7