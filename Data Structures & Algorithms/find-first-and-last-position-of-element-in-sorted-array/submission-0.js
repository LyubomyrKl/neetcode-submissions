class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
      


        let findIndex = (cond) => {
            let l = 0;
            let r = nums.length;

            while(l < r){
                const mid = (l + r) >> 1;

                cond(mid) ? r = mid : l = mid + 1
            } 

            return l;
        }    

        const start = findIndex(x => nums[x] >= target)

        if (start === nums.length || nums[start] !== target) return [-1, -1];

        const end = findIndex(x => nums[x] > target) - 1;

        return [start, end]
    }
}


