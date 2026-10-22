class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
    const MAX = 2147483647, MIN = -2147483648;
        let res = 0;
        while (x !== 0) {
            const digit = x % 10;
            x = Math.trunc(x / 10);
            if (res > Math.trunc(MAX / 10) || (res === Math.trunc(MAX / 10) && digit > 7)) return 0;
            if (res < Math.trunc(MIN / 10) || (res === Math.trunc(MIN / 10) && digit < -8)) return 0;
            res = res * 10 + digit;
        }
        return res;
    }
}
