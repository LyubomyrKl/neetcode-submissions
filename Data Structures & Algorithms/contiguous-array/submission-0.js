class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxLength(nums) {
          let zero = 0,
            one = 0,
            res = 0;
        const diffIndex = new Map();

        for (let i = 0; i < nums.length; i++) {
            nums[i] === 0 ? zero++ : one++;
            
            const diff = one - zero

            if(!diffIndex.has(diff)) diffIndex.set(diff, i)

            if(zero === one){
                res = i + 1
            } else {
                res = Math.max(res, i - diffIndex.get(diff))
            }
        }

        return res;
    }
}
