class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if(nums[0] < nums[nums.length - 1]) return nums[0]

        let l = 0;
        let r = nums.length - 1;

        let min = nums[nums.length - 1];

        while(l <= r){
            const midPoint = l + Math.ceil((r - l) / 2 )

            const midNum = nums[midPoint];
            console.log('newIndex', Math.floor((r - l) / 2 ))
            console.log('midPoint', midPoint)
            console.log('midNum', midNum)

            if(midNum > nums[0]){
                l = midPoint + 1;
            } else {
                min = Math.min(min, midNum)
                r = midPoint - 1;
            }
        }

        return min;
    }
}



