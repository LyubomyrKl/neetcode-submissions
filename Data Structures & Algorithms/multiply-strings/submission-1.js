class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        const res = new Array(num1.length + num2.length).fill(0);

         for (let i = num1.length - 1; i >= 0; i--) {
            for (let j = num2.length - 1; j >= 0; j--) {
                const sum = res[i + j + 1] + (num1[i] - '0') * (num2[j] - '0');
                res[i + j + 1] = sum % 10;                 
                res[i + j] += Math.floor(sum / 10);       
            }
        }

        return res.join('').replace(/^0+/, '') || '0';
    }
}

