class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()

        for(let i = 0; i < nums.length; i++){
            const numKey = nums[i];
            map.set(numKey, (map.get(numKey) || 0) + 1)
        }

        const arrayOfMapEntries = [...map.entries()].sort((a,b) => b[1] - a[1]);

        return arrayOfMapEntries.slice(0, k).map(item => item[0])
    }
}
