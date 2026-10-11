class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const total = nums.reduce((a, i) => a + i, 0);

        if(total % 2 !== 0) return false; 

        const target = total / 2;

        let subsetsSums = new Set([0]);

        for(let i = 0; i < nums.length; i++){
            const cloneSet = new Set();

            for(const sum of subsetsSums){
                cloneSet.add(sum + nums[i]);
            }

            for (const s of cloneSet){
                if(s <= target) subsetsSums.add(s);
            }

            if(subsetsSums.has(target)) return true
        }

       

        return false;

    }
}
