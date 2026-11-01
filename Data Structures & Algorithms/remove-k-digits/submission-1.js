class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    removeKdigits(num, k) {
        const stack = [];

        for(let i = 0; i < num.length; i++){
            const number = Number(num[i]);

            while(k > 0 && number < stack[stack.length - 1]){
                stack.pop();
                k--
            }

            stack.push(number);
        }

        stack.length -= k; 

        while(stack[0] === 0){
            stack.shift();
        }

        let newNumber = stack.join('');

        return newNumber.length > 0 ? newNumber : '0';
    }
}
