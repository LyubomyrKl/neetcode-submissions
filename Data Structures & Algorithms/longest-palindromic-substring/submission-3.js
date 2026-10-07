class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const isPal = Array.from({length: s.length}, () => new Array(s.length).fill(false))

        let best = [0, 0];
        const n = s.length;
        for (let l = n - 1; l >= 0; l--) {
            for (let r = l; r < n; r++) {
                if (l === r) { isPal[l][r] = true; continue; }


                const endsMatch = s[l] === s[r]; // false 
                const insideOk = r - l <= 2 || isPal[l + 1][r - 1]; // true 


                if (endsMatch && insideOk) {
                    isPal[l][r] = true;
                    if (r - l > best[1] - best[0]) best = [l, r];
                }
            }
        }

        return s.slice(best[0], best[1] + 1);
    }
}
