class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const lastIndexForChar = new Map();

        for(let i = 0; i < S.length; i++){
            lastIndexForChar.set(S[i], i)
        }


        const res = [];

        for(let i = 0; i < S.length; i++){
            let windowEnd = lastIndexForChar.get(S[i]);
            let j = i + 1;

            while(j <= windowEnd){
                windowEnd = Math.max(windowEnd, lastIndexForChar.get(S[j]))
                j++
            }

            res.push(windowEnd - i + 1);

            i = windowEnd
        }

        return res;
    }
}
