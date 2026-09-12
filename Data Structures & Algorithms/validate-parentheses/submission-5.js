class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // if odd - cannot be true be definition
        if(s.length % 2 != 0) return false;

        const stack = [];

        let closeToOpen = {
            '}': '{',
            ']': '[',
            ')': '('
        }


        for(let i = 0; i < s.length; i++){
            if(s[i] in closeToOpen){
                if(stack[stack.length-1] === closeToOpen[s[i]]){
                    stack.pop();
                } else {
                    return false
                }
            } else {
                stack.push(s[i])
            }
        }

        return stack.length === 0;
    }
}