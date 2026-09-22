class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        if(target === 0) return [];
        nums.sort((a, b) => a - b);

        let ans = [];
        let path = [];
     
        this.backtrack(nums, ans, path, target, 0);
        return ans

    }

    backtrack(nums, ans, path, remaining, idx){
        const sum = path.reduce((a, b) => a + b , 0)

        if(remaining === 0){
            ans.push([...path])
            return;
        }

        for(let i = idx; i < nums.length; i++){
            if(remaining - nums[i] < 0) return;
            path.push(nums[i]);
            this.backtrack(nums, ans, path, remaining - nums[i], i)
            path.pop()
        }
    }
}
