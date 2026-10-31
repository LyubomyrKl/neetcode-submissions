
const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numEnclaves(grid) {
        const queue = [];
        let numberOfNums = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;

        for(let r = 0;  r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === 1){
                    if(
                        r === 0 || 
                        c === 0 || 
                        r === ROWS - 1 || 
                        c === COLS -1
                    ){
                        queue.push([r, c])
                        grid[r][c] = 0
                    } 

                    numberOfNums++;
                }
            }
        }


        let head = 0;


        while(head < queue.length){
            const [r, c] = queue[head++];

            directions.forEach(([dr, dc]) => {
                const nr = r + dr;
                const nc = c + dc;

                if(
                    nr >= 0 && 
                    nr < ROWS && 
                    nc >= 0 && 
                    nc < COLS &&
                    grid[nr][nc] === 1
                ){  
                    grid[nr][nc] = 0;
                    queue.push([nr, nc]);
                }
            })
        }

        return Math.max(numberOfNums - queue.length, 0);
    }
}
