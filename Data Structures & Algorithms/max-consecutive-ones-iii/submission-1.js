class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let l = 0;
        let r = 0;

        let maxLength = 0;

        while(r < nums.length){
            if(nums[r] === 0){
                if(k > 0){
                    k--
                    r++
                    maxLength = Math.max(maxLength, r - l)

                } else {
                    
                    if(nums[l] === 0){
                        k++
                    }

                    l++
                    
                }

            } else {
                r++
                maxLength = Math.max(maxLength, r - l)
            }
        }

        return maxLength;
    }
}

