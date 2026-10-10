class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let result = [];
        let board = Array.from({ length: n }, () => Array(n).fill("."));

        const backtrack = (row) => {
            if (row === n) {
                result.push(board.map((row) => row.join("")));
                return;
            }

            for (let c = 0; c < n; c++) {
                if (this.isSafe(c, row, board)) {
                    board[row][c] = "Q";
                    backtrack(row + 1);
                    board[row][c] = ".";
                }
            }
        };

        backtrack(0);
        return result;
    }

    isSafe(c, r, board) {
        for (let row = r - 1; row >= 0; row--) {
            if (board[row][c] === "Q") return false;
        }
        for (let row = r - 1, col = c - 1; row >= 0; row--, col--) {
            if (board[row][col] === "Q") return false;
        }
        for (let row = r - 1, col = c + 1; row >= 0; row--, col++) {
            if (board[row][col] === "Q") return false;
        }
        return true;
    }
}
