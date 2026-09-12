class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map() // key: number, value: count
        const freq = Array.from({length: nums.length}, () => []);
        
        for(let i = 0; i < nums.length; i++){
            const numKey = nums[i];
            freqMap.set(numKey, (freqMap.get(numKey) || 0) + 1)
        }

        freqMap.forEach((count, num) => freq[count-1].push(num));

        const response = [];
        for(let i = freq.length - 1; response.length !== k; i--){
            response.push(...freq[i]);
        }

        return response;

    }
}
