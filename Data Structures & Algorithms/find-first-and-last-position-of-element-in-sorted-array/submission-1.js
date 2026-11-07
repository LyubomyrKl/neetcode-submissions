class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        let findIndex = (target) => {
            let l = 0;
            let r = nums.length;

            while(l < r){
                const mid = (l + r) >> 1;

                nums[mid] >= target ? r = mid : l = mid + 1
            } 

            return l;
        }    

        const start = findIndex(target)

        if (start === nums.length || nums[start] !== target) return [-1, -1];

        const end = findIndex(target + 1) - 1;

        return [start, end]
    }
}


