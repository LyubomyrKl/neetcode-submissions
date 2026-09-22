class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);

        let ans = [];
        let path = [];
     
        this.backtrack(candidates, ans, path, target, 0);
        return ans

    }

    backtrack(nums, ans, path, remaining, idx){
        if(remaining === 0){
            ans.push([...path])
            return;
        }

        for(let i = idx; i < nums.length; i++){
            if (i > idx && nums[i] === nums[i - 1]) continue;  // skip duplicate branch
            if (nums[i] > remaining) break;
            path.push(nums[i]);
            this.backtrack(nums, ans, path, remaining - nums[i], i + 1)
            path.pop()
        }
    }
}
