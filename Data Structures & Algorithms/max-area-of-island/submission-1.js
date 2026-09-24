class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if(!grid.length === 0) return 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;

        let maxIslandSize = 0;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]

        const bfs = (r, c) => {
            let islandSize = 0;
            const q = new Queue();
            q.push([r, c])
            grid[r][c] = 0; 
            
            while(!q.isEmpty()){
                islandSize++;
                const [row, col] = q.pop()
         
                for(const [dr, dc] of directions){
                    const nr = row + dr;
                    const nc = col + dc;

                    if(
                       nr >= 0 &&
                       nr < ROWS &&
                       nc >= 0 &&
                       nc < COLS &&
                       grid[nr][nc] === 1
                    ) {
                        q.push([nr, nc]);
                        grid[nr][nc] = 0
                    }
                }   

            }

            maxIslandSize = Math.max(maxIslandSize, islandSize)
        }

     
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){            
                if(grid[r][c] === 1){
                    bfs(r, c);
                }
            }
        }

        return maxIslandSize;
    }
}
