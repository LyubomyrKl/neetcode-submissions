class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numberOfSubarrays(nums, k) {
        const counts = Array(nums.length + 1).fill(0);
        counts[0] = 1;
        let odd = 0,
            answer = 0;
        for (const x of nums) {
            odd += x % 2;
            if (odd >= k) answer += counts[odd - k];
            counts[odd]++;
        }
        return answer;
    }
}
