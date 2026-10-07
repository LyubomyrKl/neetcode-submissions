class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const isPaliSubSArray = Array.from({length:s.length}, () => new Array(s.length).fill(false))

        let counter = 0;

        for(let l = s.length - 1; l >= 0; l--){
            for(let r = l; r < s.length; r++){
                if( r === l){
                    isPaliSubSArray[l][r] = true;
                }

                const isEdgesEqual = s[l] === s[r];
                const isMiddlePartPali = r - l <= 2 || isPaliSubSArray[l + 1][r - 1];

                if(isEdgesEqual && isMiddlePartPali){
                    isPaliSubSArray[l][r] = true;
                    counter++
                }
            }
        }

        return counter
    }
}
