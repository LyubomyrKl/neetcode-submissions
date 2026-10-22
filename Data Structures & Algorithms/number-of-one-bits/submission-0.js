class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    // RULE 1 n & 1 tells you the last bit: 1 or 0.
    // RULE 2 n >> 1 drops the last bit.

    hammingWeight(n) {
        let counter = 0;

        while(n !== 0){
            if(n & 1 === 1){
                counter++
            }

            n = n >> 1
        }
        
        return counter
    }
}
