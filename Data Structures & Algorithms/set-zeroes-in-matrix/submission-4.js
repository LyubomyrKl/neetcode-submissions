class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const m = matrix.length, n = matrix[0].length;

        const firstRowZero = matrix[0].some(v => v === 0);
        const firstColZero = matrix.some(row => row[0] === 0);

        for(let i = 1; i < matrix.length; i++){
            for(let j = 1; j < matrix[0].length; j++){
                if(matrix[i][j] === 0){
                   matrix[i][0] = 0
                   matrix[0][j] = 0
                }
            }
        }

        for(let i = 1; i < matrix.length; i++){
            for(let j = 1; j < matrix[0].length; j++){
                if(matrix[i][0] === 0 || matrix[0][j] === 0){
                   matrix[i][j] = 0
                }
            }
        }

        // 4. zero the notebooks themselves, if they needed it
        if (firstRowZero) for (let j = 0; j < n; j++) matrix[0][j] = 0;
        if (firstColZero) for (let i = 0; i < m; i++) matrix[i][0] = 0;

    }
}
