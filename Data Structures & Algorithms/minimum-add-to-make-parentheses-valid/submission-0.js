class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minAddToMakeValid(s) {
        const stack = [];

        for(let char of s){
               console.log(char);
                console.log(stack)
            if(char === ')' && stack[stack.length - 1] === '('){
             
                stack.pop();
                continue;
            };

            stack.push(char);
        }

        return stack.length
    }
}
