const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const dfs = (r, c, i) => {
            if (i === word.length - 1) return true;

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    board[nr][nc] !== '#' &&
                    board[nr][nc] === word[i + 1]
                ) {
                    const temp = board[nr][nc];
                    board[nr][nc] = '#';

                    if (dfs(nr, nc, i + 1)) return true;

                    board[nr][nc] = temp;
                }
            }

            return false;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === word[0]) {
                    const temp = board[r][c];
                    board[r][c] = '#';

                    if (dfs(r, c, 0)) return true;

                    board[r][c] = temp;
                }
            }
        }

        return false;
    }
}