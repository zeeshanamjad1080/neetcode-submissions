class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let ROWS = board.length;
        let COLS = board[0].length;
        function bfs(row, col) {
            if (
                row < 0 ||
                col < 0 ||
                row >= ROWS ||
                col >= COLS ||
                board[row][col] === "X" ||
                board[row][col] === "S"
            )
                return;

            board[row][col] = "S";

            bfs(row - 1, col);
            bfs(row, col - 1);
            bfs(row, col + 1);
            bfs(row + 1, col);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (
                    (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) &&
                    board[r][c] === "O"
                ) {
                    bfs(r, c);
                }
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "O") {
                    board[r][c] = "X";
                }
                if (board[r][c] === "S") {
                    board[r][c] = "O";
                }
            }
        }

        return board;
    }
}
