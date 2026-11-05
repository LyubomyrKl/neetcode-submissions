class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    removeKdigits(num, k) {
        const stack = [];

        for(let char of num){
            while(k > 0 && stack[stack.length - 1] > char){
                stack.pop()
                k--
            }

            stack.push(char)
        }

        stack.length -= k; 
        
        while(stack[0] === '0'){
            stack.shift();
        }

        const newNumber = stack.join('')

        return newNumber.length > 0 ? newNumber : '0'
    }
}
