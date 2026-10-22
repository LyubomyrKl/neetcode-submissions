class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // RULE 1 x ^ x = 0: a number cancels itself.
    // RULE 2 x ^ 0 = x: XOR with 0 changes nothing.
    // RULE 3 order doesn’t matter, just like with +. a ^ b ^ a = a ^ a ^ b.
    singleNumber(nums) {
        let res = 0;
        for (const n of nums) res ^= n;
        return res;
    }
}
