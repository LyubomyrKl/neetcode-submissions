class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    // Water cannot go uphill -> grid[r][c] > grid[r + dr][c + dc]
    //
    pacificAtlantic(heights) {
        if(heights.length === 0 || heights[0].length === 0) return [];

        const ROWS = heights.length,
              COLS = heights[0].length;

        
        const pacificSeeds = [];
        const atlanticSeeds = [];
        

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (r === 0 || c === 0) {
                    pacificSeeds.push([r, c]);
                }
                if (r === ROWS - 1 || c === COLS - 1) {
                    atlanticSeeds.push([r, c]);
                }
            }
        }


        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ]

        const bfs = (seeds, visited) => {
            const queue = [...seeds];

            for (const [r, c] of seeds) visited[r][c] = true;

            let head = 0;

            while (head < queue.length) {
                const [r, c] = queue[head++];

                for (const [dr, dc] of directions) {
                    const nr = r + dr, 
                        nc = c + dc;

                    if(
                        nr >= 0 &&
                        nr < ROWS &&
                        nc >= 0 && 
                        nc < COLS && 
                        !visited[nr][nc] &&
                        heights[r][c] <= heights[nr][nc]
                    ) {
                        visited[nr][nc] = true;
                        queue.push([nr, nc]);
                    }
                }
            }
        }

        const makeGrid = () => Array.from({ length: ROWS }, () => new Array(COLS).fill(false));

        const pacificVisited = makeGrid();
        const atlanticVisited = makeGrid();

        bfs(pacificSeeds, pacificVisited);
        bfs(atlanticSeeds, atlanticVisited);

        const result = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacificVisited[r][c] && atlanticVisited[r][c]) result.push([r, c]);
            }
        }
        return result;
        
    }
}
