class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        if(board.length === 0 || board[0].length === 0) return [];

        const ROWS = board.length;
        const COLS = board[0].length


        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ]

        const dfs = (r, c) => {
            board[r][c] = 'S'; // S - SAFE 

            directions.forEach(([dr, dc]) => {
                const nr = r + dr;
                const nc = c + dc; 

                if(
                    nr >= 0 && 
                    nr < ROWS && 
                    nc >= 0 && 
                    nc < COLS &&
                    board[nr][nc] === "O"
                ){
                    dfs(nr, nc)
                }
            })

        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(r === 0 || c === 0 || r === ROWS - 1 || c === COLS - 1){
                    if(board[r][c] === "O"){
                        dfs(r, c);
                    }
                }

            }
        }
        
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(board[r][c] === 'O'){
                    board[r][c] = 'X';
                    continue;
                }

                if(board[r][c] === 'S'){
                    board[r][c] = 'O';
                    continue;
                }
            }
        }
        
    }
}
