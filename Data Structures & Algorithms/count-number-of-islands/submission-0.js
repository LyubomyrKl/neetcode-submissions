class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if(grid.length === 0) return 0;
        
        let numOfIslands = 0;
        
        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){

                if(grid[r][c] === '1'){
                    this.bfs(grid, r, c)
                    numOfIslands++
                }
            }
        }

        return numOfIslands;
    }

    bfs(grid, r, c){
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const q = new Queue();

        q.push([r, c]);
        grid[r][c] = 0;

        while(!q.isEmpty()){
            const [row, col] = q.pop()

            for(const [dr, dc] of directions){
                const siblingRow = row + dr;
                const siblingCol = col + dc;

                if(
                    siblingCol >= 0 &&
                    siblingCol < grid[0].length &&
                    siblingRow >= 0 &&
                    siblingRow < grid.length && 
                    grid[siblingRow][siblingCol] === '1'
                ) {
                    q.push([siblingRow, siblingCol])
                    grid[siblingRow][siblingCol] = "0";
                }
            }
        }
    }
}
