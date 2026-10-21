class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carry = true;

        for(let i = digits.length -1; i >= 0; i--){
            if(!carry) break
            
            const newDigit = digits[i] + carry;

            digits[i] = newDigit % 10;

            carry = newDigit >= 10
        }

        if (carry) digits.unshift(1);

        return digits;
    }
}
