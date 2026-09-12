class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length-1;

        while (l < r){
            const leftChar = s[l].toLowerCase();;
            const rightChar = s[r].toLowerCase();
            if(!this.isAlphabetNumChar(leftChar)){
                l++
                continue;
            }

            console.log(s[l], s[r])

            if(!this.isAlphabetNumChar(rightChar)){
                r--;
                continue;
            }

            if(leftChar !== rightChar) return false 

            l++;
            r--;

        }

        return true
    }

    isAlphabetNumChar(char) {
        const c = char.toLowerCase();
        return (c.toLowerCase().charCodeAt(0) >= 'a'.charCodeAt(0) && c.toLowerCase().charCodeAt(0) <= 'z'.charCodeAt(0)) ||
        (c.toLowerCase().charCodeAt(0) >= '0'.charCodeAt(0) && c.toLowerCase().charCodeAt(0) <= '9'.charCodeAt(0))
    }
}