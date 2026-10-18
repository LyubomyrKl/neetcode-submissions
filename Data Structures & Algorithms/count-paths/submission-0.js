class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let result = 1;
        for (let i = 1; i <= m - 1; i++) {
            result = result * (n - 1 + i) / i;
        }
        return Math.round(result);
    }
}
