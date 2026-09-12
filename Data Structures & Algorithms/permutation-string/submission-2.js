class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const s1Count = new Map();
        const s2FramedCount = new Map();

        for(let i = 0; i < s1.length; i++){
            s1Count.set(
                s1[i],
                (s1Count.get(s1[i]) || 0) + 1
            )

             s2FramedCount.set(
                s2[i],
                (s2FramedCount.get(s2[i]) || 0) + 1
            )
        }

        let matches = 0;

        for(let [char, count] of s1Count){
           if (s2FramedCount.get(char) === count) {
              matches++;
           }
        }

        for(let i = s1.length; i < s2.length; i++){
            if (matches === s1Count.size) {
                return true;
            }

            const recievedChar = s2[i];

            const oldCount = s2FramedCount.get(recievedChar) || 0;
            const newCount = oldCount + 1; 

            const subStringRecievedCharCount = s1Count.get(recievedChar);

            if(newCount === subStringRecievedCharCount){
                matches++
            } else if (subStringRecievedCharCount === oldCount){
                matches--
            }

            s2FramedCount.set(recievedChar, newCount)

            const pastChar = s2[i - s1.length]

            const oldPastCharCount = s2FramedCount.get(pastChar) || 0;
            const newPastCharCount = oldPastCharCount - 1;

            const subStringOldCharCount = s1Count.get(pastChar);

            if(newPastCharCount === subStringOldCharCount){
                matches++
            } else if (oldPastCharCount === subStringOldCharCount){
                matches--
            }

            s2FramedCount.set(pastChar, newPastCharCount)

        }


        return matches === s1Count.size;
    }

}