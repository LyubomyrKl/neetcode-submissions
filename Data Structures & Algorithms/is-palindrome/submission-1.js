class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (!this.isAlphabetNumChar(s[i])) {
                i++;
                continue;
            }

            if (!this.isAlphabetNumChar(s[j])) {
                j--;
                continue;
            }

            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }

    isAlphabetNumChar(char) {
        const code = char.toLowerCase().charCodeAt(0);

        return (
            (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) ||
            (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0))
        );
    }
}