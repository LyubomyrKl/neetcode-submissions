class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
    // bottom row: from any cell, only one way (go straight right)
    const row = new Array(n).fill(1);

    for (let r = m - 2; r >= 0; r--) {
    
        for (let c = n - 2; c >= 0; c--) {
            row[c] = row[c] + row[c + 1];
        }
    }

    return row[0];
}
}
