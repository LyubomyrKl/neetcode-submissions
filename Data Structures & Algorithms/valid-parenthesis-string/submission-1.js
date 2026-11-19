class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // Keep the range of possible open-( counts: throw away anything below 0, fail if the whole range drops below 0, and at the end succeed if 0 is still in the range.
    checkValidString(s) {
        let leftMin = 0;
        let leftMax = 0;

        for (const c of s) {
            if (c === '(') {
                leftMin++;
                leftMax++;
            } else if (c === ')') {
                leftMin--;
                leftMax--;
            } else {
                leftMin--;
                leftMax++;
            }

            if (leftMax < 0) {
                return false;
            }

            if (leftMin < 0) {
                leftMin = 0;
            }
        }

        return leftMin === 0;
    }
}