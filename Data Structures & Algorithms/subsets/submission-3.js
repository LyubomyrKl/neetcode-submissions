class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
  subsets(nums) {
    const res = [];

    const subset = [];

    const dfs = (startIndex) => {
        res.push([...subset])

        for(let i = startIndex; i < nums.length; i++){
            subset.push(nums[i]);
            dfs(i+1);
            subset.pop();
        }
    }

    dfs(0);

    return res;
  }
}
