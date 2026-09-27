class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);

        const res = [];

        this.backtrack(nums, res, [], 0)

        return res;
    }

    backtrack(nums, res, path, index){
        res.push([...path]);

        for(let i = index; i < nums.length; i++){
            if(i > index && nums[i] === nums[i - 1]){
                continue; 
            }
            path.push(nums[i]);
            this.backtrack(nums, res, path, i + 1)
            path.pop();
        }
    }
}



