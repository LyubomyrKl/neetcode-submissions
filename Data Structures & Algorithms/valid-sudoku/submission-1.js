class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for (let i = 0; i < board.length; i++) {
            const row = board[i];

            for (let j = 0; j < row.length; j++) {
               const number = row[j];

               if(number === '.') continue 

               const squareKey = `${Math.floor(i / 3) }/${Math.floor(j / 3)}`

               if(!rows.has(i)) rows.set(i, new Set())
               if(!cols.has(j)) cols.set(j, new Set())
               if(!squares.has(squareKey)) squares.set(squareKey, new Set())

               const rowValues = rows.get(i),
                     colValues = cols.get(j),
                     squareValues = squares.get(squareKey);

                if(rowValues.has(number) || colValues.has(number) || squareValues.has(number)) return false             
         

                rowValues.add(number);
                colValues.add(number);
                squareValues.add(number);

            }
        }

        return true;
    }
}