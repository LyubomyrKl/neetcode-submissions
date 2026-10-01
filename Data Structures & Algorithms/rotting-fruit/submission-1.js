class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        if(grid.length === 0 || grid[0].length === 0) return -1;

        const ROWS = grid.length;
        const COLS = grid[0].length;

        let fruitsCount = 0;
        let rottenFruitsCount = 0;
        let queue = [[]];

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] !== 0){
                    fruitsCount++
                }

                if(grid[r][c] === 2){
                    queue[0].push([r, c]);
                    rottenFruitsCount++;
                }
            }
        }

        let queueLevelPointer = 0;

        const direcitions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ]


        while(queueLevelPointer < queue.length){
            const level = queue[queueLevelPointer];
            

            for(let [r, c] of level){
                direcitions.forEach(([dr, dc]) => {
                    const ROW = r + dr;
                    const COL = c + dc;

                    if(
                        ROW >= 0 &&
                        ROW < ROWS && 
                        COL >= 0 && 
                        COL < COLS
                    ) {
                        if(grid[ROW][COL] === 1){
                            grid[ROW][COL] = 2; 

                            let nextLevelQueue = queueLevelPointer + 1

                            if(!queue[nextLevelQueue]){
                                queue[nextLevelQueue] = []
                            }

                            queue[nextLevelQueue].push([ROW, COL])
                            rottenFruitsCount++
                        }
                    }


                })
            }

            queueLevelPointer++
        }

        return rottenFruitsCount === fruitsCount ? queueLevelPointer - 1 : -1;

    }
}
