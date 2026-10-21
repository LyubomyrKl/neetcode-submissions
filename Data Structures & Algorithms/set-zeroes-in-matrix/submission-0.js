class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const zeroRows = new Set();
        const zeroCols = new Set();

        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                if(matrix[i][j] === 0){
                    zeroRows.add(i);
                    zeroCols.add(j);
                }
            }
        }

        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                if(zeroRows.has(i) || zeroCols.has(j)){
                   matrix[i][j] = 0
                }
            }
        }

    }
}
