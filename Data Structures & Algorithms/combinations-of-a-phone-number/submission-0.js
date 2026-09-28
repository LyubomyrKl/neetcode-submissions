class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = [];
        if (digits.length === 0) return res;

        const backtrack = (i, path) => {
            if(path.length === digits.length){
                res.push(path)
                return;
            }


            for(const char of this.digitToChar(digits[i])){
                backtrack(i + 1, path + char)
            }
             
        }

        backtrack(0, '')

        return res;

    }


    digitToChar(n){
        return {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'qprs',
            8: 'tuv',
            9: 'wxyz',
        }[n];
    }
}
