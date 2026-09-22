class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let ans = [];
        let path = [];
     
        this.backtrack(nums, ans, path, target, 0);
        return ans

    }

    backtrack(nums, ans, path, remaining, idx){
        if(remaining === 0){
            ans.push([...path])
            return;
        }

        for(let i = idx; i < nums.length; i++){
            if(remaining - nums[i] < 0) continue;
            path.push(nums[i]);
            this.backtrack(nums, ans, path, remaining - nums[i], i)
            path.pop()
        }
    }
}
