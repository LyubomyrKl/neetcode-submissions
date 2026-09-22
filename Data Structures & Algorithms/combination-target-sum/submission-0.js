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

    backtrack(nums, ans, path, target, idx){
        const sum = path.reduce((a, b) => a + b , 0)

        if(sum > target) return;

        if(sum === target){
            ans.push([...path])
            return;
        }

        for(let i = idx; i < nums.length; i++){
            if(sum + nums[i] > target) return;
            path.push(nums[i]);
            this.backtrack(nums, ans, path, target, i)
            path.pop()
        }
    }
}
