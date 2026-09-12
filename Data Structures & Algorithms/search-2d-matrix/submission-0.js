class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let lr = 0,
            rr = matrix.length - 1;

        while(lr <= rr){
            let mr = lr + Math.floor((rr - lr) / 2)
            const mrValues = matrix[mr];

            if(mrValues[0] > target){
                rr = mr - 1
                continue
            } else if(mrValues[mrValues.length - 1] < target) {
                lr = mr + 1
            } else {
                let l = 0,
                    r = matrix[0].length - 1;

                
                while(l <= r){
                    const m = l + Math.floor((r - l) / 2)

                    if(mrValues[m] === target){
                        return true
                    }

                    mrValues[m] > target ? r = m - 1 : l = m + 1
                }

                return false;
            }
        }    

        return false        
        
    }
}
