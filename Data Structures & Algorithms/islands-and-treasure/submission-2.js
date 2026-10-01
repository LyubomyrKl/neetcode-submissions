class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const cellQueue = [];

        const ROWS = grid.length;
        const COLS = grid[0].length;

        if(COLS === 0 ) return;

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === 0) cellQueue.push([r, c])
            }
        }

        const landValue = 2**31 - 1;

        const direcitions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ]

        let head = 0;

        while (head < cellQueue.length) {
            const [r, c] = cellQueue[head++];

            direcitions.forEach(([dr, dc]) => {
                const ROW = r + dr;
                const COL = c + dc;

                if(
                    ROW >= 0 &&
                    ROW < ROWS && 
                    COL >= 0 && 
                    COL < COLS 
                ) {

                    if(grid[ROW][COL] === landValue){
                        grid[ROW][COL] = grid[r][c] + 1;
                        cellQueue.push([ROW, COL, grid[r][c] + 1])
                    }
                }
            })

        }

    }
}
