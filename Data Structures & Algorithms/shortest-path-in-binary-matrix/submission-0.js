class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const n = grid.length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

    const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    const queue = [[0, 0, 1]];

    grid[0][0] = 1;   

    let head = 0;

    while (head < queue.length) {
        const [r, c, d] = queue[head++];

        if (r === n - 1 && c === n - 1) return d;

        for (const [dr, dc] of dirs) {
            
            const nr = r + dr, nc = c + dc;

            if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] === 0) {
                grid[nr][nc] = 1;       // mark when pushing
                queue.push([nr, nc, d + 1]);
            }
        }
    }
    return -1;
    }
}
