class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
    const res = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // 1. top row, left → right
        for (let c = left; c <= right; c++) res.push(matrix[top][c]);
        top++;                                   // that row is used up

        // 2. right column, top → bottom
        for (let r = top; r <= bottom; r++) res.push(matrix[r][right]);
        right--;                                 // that column is used up

        // 3. bottom row, right → left (only if a row is still left)
        if (top <= bottom) {
            for (let c = right; c >= left; c--) res.push(matrix[bottom][c]);
            bottom--;
        }

        // 4. left column, bottom → top (only if a column is still left)
        if (left <= right) {
            for (let r = bottom; r >= top; r--) res.push(matrix[r][left]);
            left++;
        }
    }
    return res;
}
}
