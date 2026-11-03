class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const freq = new Array(26).fill(0);
        for (const char of s) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let maxIdx = 0;
        for (let i = 1; i < 26; i++) {
            if (freq[i] > freq[maxIdx]) {
                maxIdx = i;
            }
        }

        const maxFreq = freq[maxIdx];
        if (maxFreq > Math.floor((s.length + 1) / 2)) {
            return '';
        }

        const res = new Array(s.length).fill('');
        let idx = 0;
        const maxChar = String.fromCharCode(maxIdx + 'a'.charCodeAt(0));

        while (freq[maxIdx] > 0) {
            res[idx] = maxChar;
            idx += 2;
            freq[maxIdx]--;
        }

        for (let i = 0; i < 26; i++) {
            while (freq[i] > 0) {
                if (idx >= s.length) {
                    idx = 1;
                }
                res[idx] = String.fromCharCode(i + 'a'.charCodeAt(0));
                idx += 2;
                freq[i]--;
            }
        }

        return res.join('');
    }
}