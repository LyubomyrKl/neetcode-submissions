class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        nums.sort((a, b) => a - b);

    const mapCount = new Map();

    let l = 0;
    let r = 1;

    let sum = nums[l];
    let max = 1;

    while(r < nums.length){
        const expectedSum = (r - l) * nums[r]; // expected sum of prev subarray if all valuse are qual to current element;

        // if differenct between expected and real some could be covvered with k addition
        if(expectedSum - sum <= k){
            sum += nums[r];
            r++
            max = Math.max(max, r - l)
        } else {
            sum -= nums[l];
            l++
        }
    }

    return max;
    }
}
