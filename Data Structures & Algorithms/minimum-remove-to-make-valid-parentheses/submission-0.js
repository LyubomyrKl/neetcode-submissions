class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    minRemoveToMakeValid(s) {
        let leftCleanString = '';
        let opened = 0;
        
        for(let char of s){

            if(char === ')'){
                if(opened === 0) continue;
                opened--
            }

            if(char === '('){
                opened++;
            }

            leftCleanString += char
        }

        if(opened === 0) return leftCleanString;
        
        let res = '';
        let closed = 0;

        for(let i = leftCleanString.length - 1; i >= 0; i--){
            let char = leftCleanString[i]
            if(char === '('){
                if(closed === 0) continue;
                closed--
            }

            if(char === ')'){
                closed++
            }


            res = char + res;
        }

        return res;
    }
}
