class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
      const res = [];

      candidates.sort((a, b) => a - b);

      this.backtrack(candidates, res, [], target, 0)

      return res;
    }

    backtrack(nums, ans, path, remaining, idx){
        if(remaining === 0){
            ans.push([...path])
            return;
        }

        for(let i = idx; i < nums.length; i++){
            if (i > idx && nums[i] === nums[i - 1]) continue;
            if (nums[i] > remaining) break;

            path.push(nums[i]);
            this.backtrack(nums, ans, path, remaining - nums[i], i+1);
            path.pop();
        }  
    }
}

