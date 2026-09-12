class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = new Map();
        const s2Count = new Map();

        for (let i = 0; i < s1.length; i++) {
            s1Count.set(s1[i],(s1Count.get(s1[i]) || 0) + 1);

            s2Count.set(s2[i], (s2Count.get(s2[i]) || 0) + 1);
        }

        let matches = 0;

        for (const [char, count] of s1Count) {
            if (s2Count.get(char) === count) {
                matches++;
            }
        }

        for (let i = s1.length; i < s2.length; i++) {
            if (matches === s1Count.size) {
                return true;
            }
            // Add new character
            const newChar = s2[i];
            const oldCount = s2Count.get(newChar) || 0;
            const newCount = oldCount + 1;

            if (s1Count.has(newChar)) {
                const desiredCount = s1Count.get(newChar);

                if (oldCount === desiredCount) {
                    matches--;
                } else if (newCount === desiredCount) {
                    matches++;
                }
            }

            s2Count.set(newChar, newCount);

            // Remove old character
            const oldChar = s2[i - s1.length];
            const oldCharCount = s2Count.get(oldChar);
            const newCharCount = oldCharCount - 1;

            if (s1Count.has(oldChar)) {
                const desiredCount = s1Count.get(oldChar);

                if (oldCharCount === desiredCount) {
                    matches--;
                } else if (newCharCount === desiredCount) {
                    matches++;
                }
            }

            s2Count.set(oldChar, newCharCount);

       
        }

        return matches === s1Count.size;
    }
}